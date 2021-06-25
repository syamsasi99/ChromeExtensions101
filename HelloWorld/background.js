
chrome.contextMenus.create({
    id: "search",
    title: "Google it",
    contexts: ["all"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "search") {
      chrome.tabs.create({
        url: "http://www.google.com/search?q=" + info.selectionText
      });
    }
});

chrome.storage.onChanged.addListener(function(data, storageName){
    chrome.browserAction.setBadgeText({"text": data.name.newValue.toString()});
});
