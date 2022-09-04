// ==UserScript==
// @name         Clean Facebook Newsfeed
// @version      0.1
// @description  Clean Facebook Newsfeed
// @author       aungmyokyaw
// @match        https://www.facebook.com/
// @grant        none
// ==/UserScript==

function hideFeed() {
  var feeds = document.querySelectorAll("div[role=feed]");
  for (var i = 0; i < feeds.length; i++) {
    var feed = feeds[i];
    feed.innerHTML = "";
  }
}

function hideStories() {
  var stories = document.querySelectorAll("div[aria-label=Stories]");
  for (var i = 0; i < stories.length; i++) {
    var story = stories[i];
    story.style.display = "none";
  }
}

// hide icon only
function hideMessenger() {
  var messengers = document.querySelectorAll("div[aria-label=Messenger]");
  for (var i = 0; i < messengers.length - 1; i++) {
    var messenger = messengers[i];
    messenger.style.opacity = "0";
  }
}

function hideVideoChatRoom() {
  var chatrooms = document.querySelectorAll(
    "div[aria-label='video chats that people can join']"
  );
  for (var i = 0; i < chatrooms.length; i++) {
    var chatroom = chatrooms[i];
    chatroom.style.display = "none";
  }
}

function hideCreatePost() {
  var postCreateRooms = document.querySelectorAll(
    "div[aria-label='Create a post']"
  );
  for (var i = 0; i < postCreateRooms.length; i++) {
    var postCreateRoom = postCreateRooms[i];
    postCreateRoom.style.display = "none";
  }
}

function addRandomQuoteForHiddenPost() {
  var feeds = document.querySelectorAll("div[role=article]");
  for (var i = 0; i < feeds.length; i++) {
    var feed = feeds[i];
    var feedTEXT = feeds[i].innerText || "";
    // Something went wrong
    // This may be because of a technical error that we're working to get fixed. Try reloading this page.
    // Reload Page
    var feedTextMatch = feedTEXT.match(/something went wrong/gi) || [];
    if (feedTextMatch.length > 0) {
      feed.style.display = "block";
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
    hideStories();
    hideMessenger();
    hideVideoChatRoom();
    hideCreatePost();
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
