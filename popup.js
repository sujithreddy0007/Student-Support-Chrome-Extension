document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const apiKeyInput = document.getElementById('apiKey');
    const saveKeyButton = document.getElementById('saveKey');
    const saveStatus = document.getElementById('saveStatus');
    const questionInput = document.getElementById('questionInput');
    const getAnswerButton = document.getElementById('getAnswer');
    const answerResult = document.getElementById('answerResult');
    const getSuggestionsButton = document.getElementById('getSuggestions');
    const suggestionsResult = document.getElementById('suggestionsResult');
    const loader = document.getElementById('loader');

    const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=`;

    // --- Utility Functions ---
    const showLoader = () => loader.classList.remove('hidden');
    const hideLoader = () => loader.classList.add('hidden');

    const displayError = (element, message) => {
        element.textContent = `Error: ${message}`;
        element.classList.add('text-red-500');
    };

    const clearError = (element) => {
        element.classList.remove('text-red-500');
    };

    // --- API Call Logic (Updated) ---
    async function callGemini(prompt, apiKey) {
        showLoader();
        clearError(answerResult);
        clearError(suggestionsResult);

        if (!apiKey) {
            hideLoader();
            return { error: "API Key is missing. Please save your key first." };
        }

        try {
            const response = await fetch(`${GEMINI_API_URL}${apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }]
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                // Simplified error handling to be more compatible
                const errorMessage = (errorData.error && errorData.error.message) || `HTTP error! status: ${response.status}`;
                throw new Error(errorMessage);
            }

            const result = await response.json();

            // Simplified response parsing to be more compatible
            let text = '';
            if (result.candidates && result.candidates[0] && result.candidates[0].content && result.candidates[0].content.parts && result.candidates[0].content.parts[0] && result.candidates[0].content.parts[0].text) {
                text = result.candidates[0].content.parts[0].text;
            }

            if (!text) {
                throw new Error("Could not extract text from API response.");
            }
            return { text };
        } catch (error) {
            console.error("Gemini API call failed:", error);
            return { error: error.message };
        } finally {
            hideLoader();
        }
    }

    // --- Event Listeners ---

    // Load saved API key on startup
    chrome.storage.sync.get(['apiKey'], (result) => {
        if (result.apiKey) {
            apiKeyInput.value = result.apiKey;
        }
    });

    // Save API key
    saveKeyButton.addEventListener('click', () => {
        const apiKey = apiKeyInput.value.trim();
        if (apiKey) {
            chrome.storage.sync.set({ apiKey }, () => {
                saveStatus.textContent = 'API Key saved!';
                setTimeout(() => saveStatus.textContent = '', 2000);
            });
        } else {
            saveStatus.textContent = 'Please enter a key.';
            saveStatus.classList.add('text-red-500');
            setTimeout(() => {
                saveStatus.textContent = ''
                saveStatus.classList.remove('text-red-500');
            }, 2000);
        }
    });

    // Get Answer for a question
    getAnswerButton.addEventListener('click', async() => {
        const question = questionInput.value.trim();
        const { apiKey } = await chrome.storage.sync.get(['apiKey']);

        if (!question) {
            displayError(answerResult, "Please enter a question.");
            return;
        }

        answerResult.textContent = 'Generating answer...';
        const result = await callGemini(question, apiKey);

        if (result.error) {
            displayError(answerResult, result.error);
        } else {
            answerResult.textContent = result.text;
        }
    });

    // Get suggestions for the current page
    getSuggestionsButton.addEventListener('click', () => {
        suggestionsResult.textContent = 'Analyzing page...';
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs[0]) {
                chrome.tabs.sendMessage(tabs[0].id, { action: "getPageContent" }, async(response) => {
                    if (chrome.runtime.lastError) {
                        displayError(suggestionsResult, "Cannot access this page's content.");
                        console.error(chrome.runtime.lastError.message);
                        return;
                    }

                    if (response && response.content) {
                        const { apiKey } = await chrome.storage.sync.get(['apiKey']);
                        const prompt = `Based on the following text from a webpage, provide a concise summary and 3-5 helpful suggestions or key learning points for a student. Format the output clearly.\n\n---\n\n${response.content.substring(0, 8000)}`;
                        const result = await callGemini(prompt, apiKey);

                        if (result.error) {
                            displayError(suggestionsResult, result.error);
                        } else {
                            suggestionsResult.textContent = result.text;
                        }
                    } else {
                        displayError(suggestionsResult, "Could not get content from the page.");
                    }
                });
            } else {
                displayError(suggestionsResult, "No active tab found.");
            }
        });
    });
});