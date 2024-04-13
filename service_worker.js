
/**
 * Adds a right-click menu option to trigger classifying the image.
 * The menu option should only appear when right-clicking an image.
 */
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: 'contextMenu0',
      title: 'Classify image with TensorFlow.js ',
      contexts: ['image'],
    });
  });
  
  chrome.contextMenus.onClicked.addListener(clickMenuCallback);
  