// Add an event listener to the button when the popup is loaded
console.log("1");
document.addEventListener('DOMContentLoaded', function () {
  // Select the button by its ID
  var toggleDarkModeButton = document.getElementById('toggleDarkModeButton');
  console.log("2");  
  // Add a click event listener to the button
  toggleDarkModeButton.addEventListener('click', function () {
    // Send the message to the content script when the button is clicked
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { message: "toggleDarkMode" });
      console.log("3");
    });
  });
});
