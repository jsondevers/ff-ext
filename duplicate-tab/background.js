browser.commands.onCommand.addListener(function(command) {
  if (command === "duplicate-tab") {
    browser.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      if (tabs.length > 0) {
        let currentTab = tabs[0];
        browser.tabs.duplicate(currentTab.id);
      }
    });
  }
});

