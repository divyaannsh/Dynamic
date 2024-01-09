// content.js
// This script runs on all web pages to apply the user's preferred background color

chrome.storage.sync.get(['backgroundColor'], function(result) {
    if (result.backgroundColor) {
      document.body.style.backgroundColor = result.backgroundColor;
    }
  });
  