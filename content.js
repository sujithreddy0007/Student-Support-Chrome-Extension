// This script runs on the webpages you visit.

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // Check if the message is asking for page content
    if (request.action === "getPageContent") {
        // Extract the visible text from the body of the page
        const pageText = document.body.innerText;
        sendResponse({ content: pageText });
    }
    // Return true to indicate you wish to send a response asynchronously
    return true;
});