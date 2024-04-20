chrome.storage.sync.get('toggleState', function(data) {
    if (data.toggleState) {
        // The toggle is on, use your extension's functionality here
        alert("ACTIIIIVE");
    } else {
        // The toggle is off, use the default browser functionality here
        alert("INACTIVE");
    }
});