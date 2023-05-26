//your JS code here. If required.
 // Get the browser name and version using the navigator object
    const browserName = navigator.appName;
    const version = navigator.appVersion;

    // Construct the message to display
    const message = "You are using " + browserName + " version " + version;

    // Display the message in the browser-info div
    const browserInfoDiv = document.getElementById("browser-info");
    browserInfoDiv.textContent = message;