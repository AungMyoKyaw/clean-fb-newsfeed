// ==UserScript==
// @name Clean Facebook Newsfeed
// @description Clean Facebook Newsfeed
// @version 0.1
// @author aungmyokyaw
// @license MIT
// @match https://www.facebook.com/*
// @match http://www.facebook.com/*
// @grant none
// ==/UserScript==

function hideFeed() {
  var feeds = document.querySelectorAll("div[role=feed]");
  for (var i = 0; i < feeds.length; i++) {
    var feed = feeds[i];
    feed.innerHTML = "";
  }
}

function addRandomQuoteForHiddenPost() {
  var feeds = document.querySelectorAll("div[role=article]");
  for (var i = 0; i < feeds.length; i++) {
    var feed = feeds[i];
    var feedTEXT = feeds[i].innerText;
    // Something went wrong
    // This may be because of a technical error that we're working to get fixed. Try reloading this page.
    // Reload Page
    if (feedTEXT.includes("Something went wrong")) {
      feed.innerHTML =
        "<div style='display: flex; align-items: center; justify-content: center; height: 15em;'><div style='color: white; font-size: 3em;'>" +
        "❄️" +
        "</div></div>";
    }
  }
}

// Select the node that will be observed for mutations
const targetNode = document.querySelector("body");

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    hideFeed();
    addRandomQuoteForHiddenPost();
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
