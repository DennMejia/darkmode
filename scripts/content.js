
console.log("4");
let darkModeEnabled = false;

function enableDarkMode() {
    document.body.style.backgroundColor = '#333'; // Dark background color
    document.body.style.color = '#fff'; // Light text color
    darkModeEnabled = true;
    console.log("enabled");
}

function disableDarkMode() {
    document.body.style.backgroundColor = ''; // Remove background color
    document.body.style.color = ''; // Remove text color
    darkModeEnabled = false;
    console.log("disabled");
}

// Listen for messages from the popup or other parts of the extension
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.message === "toggleDarkMode") {
      console.log("5");
      if (darkModeEnabled) {
        disableDarkMode();
        console.log("removed it");
      }
      else {
        enableDarkMode();
        console.log("added it");
      }
      
    }
});