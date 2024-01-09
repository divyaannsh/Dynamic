// popup.js
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('applyButton').addEventListener('click', applyBackgroundColor);
  });
  
  function applyBackgroundColor() {
    const colorPicker = document.getElementById('colorPicker');
    const backgroundColor = colorPicker.value;
  
    chrome.storage.sync.set({ 'backgroundColor': backgroundColor }, function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'applyBackgroundColor' });
      });
    });
  }
  