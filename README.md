# Gemini Student Helper 🚀

A powerful Chrome extension designed to assist students by providing instant answers and intelligent webpage summaries using the Google Gemini API.

---

## ✨ Features

* **🤖 Instant Q&A:** Ask any academic question and receive a well-formatted answer directly in the extension popup.
* **📄 Smart Page Analysis:** Get a concise summary and key learning points from any webpage with a single click.
* **✍️ Markdown Formatting:** Responses from the Gemini API are beautifully rendered with proper headings, lists, and bold text for easy readability.
* **🔐 Secure API Key Storage:** Your Google Gemini API key is stored safely and locally using Chrome's storage API.
* **🎨 Modern & Clean UI:** A user-friendly interface built with Tailwind CSS for a smooth and intuitive experience.
* ** индикатор загрузки:** A clear loading indicator provides feedback while the AI is processing your request.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3, JavaScript (ES6)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **API:** [Google Gemini API](https://ai.google.dev/)
* **Markdown Parsing:** [Showdown.js](https://github.com/showdownjs/showdown)
* **Platform:** [Google Chrome Extension (Manifest V3)](https://developer.chrome.com/docs/extensions/)

---

## 📂 Project Structure

Here is the file structure for the extension:

'''
Of course! Here is the complete code for a professional and detailed README.md file for your project.

This file is crucial as it explains what your project does, how to set it up, and how to use it. You can copy and paste this directly into your README.md file.

Markdown

# Gemini Student Helper 🚀

A powerful Chrome extension designed to assist students by providing instant answers and intelligent webpage summaries using the Google Gemini API.



---

## ✨ Features

* **🤖 Instant Q&A:** Ask any academic question and receive a well-formatted answer directly in the extension popup.
* **📄 Smart Page Analysis:** Get a concise summary and key learning points from any webpage with a single click.
* **✍️ Markdown Formatting:** Responses from the Gemini API are beautifully rendered with proper headings, lists, and bold text for easy readability.
* **🔐 Secure API Key Storage:** Your Google Gemini API key is stored safely and locally using Chrome's storage API.
* **🎨 Modern & Clean UI:** A user-friendly interface built with Tailwind CSS for a smooth and intuitive experience.
* ** индикатор загрузки:** A clear loading indicator provides feedback while the AI is processing your request.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3, JavaScript (ES6)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **API:** [Google Gemini API](https://ai.google.dev/)
* **Markdown Parsing:** [Showdown.js](https://github.com/showdownjs/showdown)
* **Platform:** [Google Chrome Extension (Manifest V3)](https://developer.chrome.com/docs/extensions/)

---

## 📂 Project Structure

Here is the file structure for the extension:
```
gemini-student-helper/
│
├── 📂 images/
│   ├── icon16.png         # (16x16 icon for the toolbar)
│   ├── icon48.png         # (48x48 icon for extensions page)
│   └── icon128.png        # (128x128 icon for web store)
│
├── 📄 content.js          # (Injects into webpages to read content)
├── 📄 manifest.json        # (Core extension configuration file)
├── 📄 popup.html           # (The main HTML for the extension popup)
├── 📄 popup.js             # (Handles all logic, UI, and API calls)
└── 📄 README.md            # (You are here!)
```

---

## 🚀 Setup and Installation

To get this extension running on your local machine, follow these simple steps.

### **Prerequisites**

1.  **Google Chrome:** Make sure you have the latest version of Google Chrome installed.
2.  **Gemini API Key:** You need a free API key from Google AI Studio.
    * Visit [Google AI Studio](https://aistudio.google.com/app/apikey).
    * Click on **"Create API key"** and copy your new key.

### **Installation Steps**

1.  **Download the Code:**
    * Download the project files as a ZIP or clone the repository to your local machine.

2.  **Create Icon Files:**
    * Inside the `images` folder, make sure you have three PNG icons: `icon16.png`, `icon48.png`, and `icon128.png`. These can be simple placeholders for now. **The extension will not load without them.**

3.  **Load the Extension in Chrome:**
    * Open Google Chrome and navigate to `chrome://extensions`.
    * In the top-right corner, toggle on **"Developer mode"**.
    * Click the **"Load unpacked"** button that appears on the top-left.
    * Select the entire `gemini-student-helper` folder that you downloaded.

4.  **Add Your API Key:**
    * The extension icon should now appear in your Chrome toolbar. Click on it.
    * Paste your Gemini API key into the input field and click **"Save"**.

The extension is now installed and ready to use!

---

## 📖 How to Use

* **To Ask a Question:**
    1.  Click the extension icon in your toolbar.
    2.  Type your question into the "Ask a Question" text area.
    3.  Click the "Get Answer" button.

* **To Analyze a Webpage:**
    1.  Navigate to any article or webpage you want to summarize.
    2.  Click the extension icon in your toolbar.
    3.  Click the "Analyze Current Page" button.
