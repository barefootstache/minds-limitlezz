// ==UserScript==
// @name          Minds Limitlezz
// @version       1.7
// @namespace     https://github.com/barefootstache/minds-limitlezz
// @icon          https://raw.githubusercontent.com/barefootstache/minds-limitlezz/main/assets/svg/lightning-bolt.svg
// @description   Upgrade your Minds experience
// @include       https://www.minds.com/*
// @copyright     2022, barefootstache (https://openuserjs.org/users/barefootstache)
// @license       MIT
// @updateURL     https://openuserjs.org/meta/barefootstache/Minds_Limitlezz.meta.js
// @downloadURL   https://openuserjs.org/install/barefootstache/Minds_Limitlezz.user.js
// ==/UserScript==

(function () {
  "use strict";

  const mindsBlue = "#1b85d6";

  function addCSS(appendCss = "") {
    const ID = "MINDS_LIMITLEZZ";

    // get or create style element
    const style = document.getElementById(ID) ?
      document.getElementById(ID) :
      document.createElement("style");

    // add CSS styles
    const mainCss = `
  /* Removes max width */
  .m-pageLayout__container {
    max-width: revert;
  }

  /* Removes super mind button */
  m-supermind__button {
	    display: none;
  }

  /* Newsfeed page */
  m-newsfeed--boost-rotator,
  m-featured-content, 
  .m-newsfeed--boost-sidebar,
  .m-groupGrid__right.m-pageLayout__pane--right,
  .m-groupsMemberships__sidebar {
    display: none;
  }

  m-channelrecommendation {
    display: none !important;
  }

  .m-newsfeed--feed.m-pageLayout__pane--main,
  .m-pageLayout__pane--main.m-pageLayout__pane--main {
    width: 100%;
    max-width: 100%;
  }

  m-newsfeed m-activity__content .m-activityContent__media--image.m-activityContent__media,
  m-newsfeed m-activity__content .m-activityContent__media--video.m-activityContent__media {
    display: flex;
  }

  m-newsfeed m-activity__content .m-activityContent__media--image.m-activityContent__media a,
  m-newsfeed m-activity__content .m-activityContent__media--video.m-activityContent__media m-videoplayer--scrollaware {
    margin: auto;
  }

  /* Keeps media only */
  /* <user_name>?layout=grid */
  m-feedgrid m-activity__minimalmetrics,
  m-feedgrid m-activity__ownerblock,
  m-feedgrid .m-activityContent__mediaDescription,
  m-feedgrid .m-activityContent__message,
  m-feedgrid .m-activity__remindDeletedNotice,
  m-feedgrid .meta.m-rich-embed-has-thumbnail {
    display: none;
  }

  /* Fix margin-bottom for adding Minds Limitlezz Widget */
  m-sidebarmore__trigger {
    margin-bottom:0 !important;
  }

  /* Minds Limitlezz Widget */
  #minds-limitlezz-widget {
    height: 400px;
  }

  #minds-limitlezz-widget-panel {
    padding: 0 18px;
    display: block;
    background-color: black;
    overflow: hidden;
    margin-top: 10px;
  }

  #minds-limitlezz-widget-button {
    text-decoration: none;
    cursor: pointer;
  }

  .minds-limitlezz-widget-auto-scroller .marr4 {
    margin-right: 4px;
  }

  .minds-limitlezz-widget-auto-scroller .button {
    background-color: #333;
    padding: 4px;
    cursor: pointer;
    border: 1px solid #555;
    width: 120px;
    text-align: center;
    margin: 4px;
  }

  .minds-limitlezz-widget-auto-scroller .button.green,
  .minds-limitlezz-widget-auto-scroller .button.red-view {
    display: block;
  }
  
  .minds-limitlezz-widget-auto-scroller .button.green:hover {
    color: green;
    border-color: green;
  }

  .minds-limitlezz-widget-auto-scroller .button.red {
    display: none;
  }

  .minds-limitlezz-widget-auto-scroller .button.red:hover,
  .minds-limitlezz-widget-auto-scroller .button.red-view:hover {
    color: red;
    border-color: red;
  }

  /* --- Channel Page --- */
  m-channel__feed .m-pageLayout__pane--main {
    max-width: revert !important;
  }

  m-channel__feed .m-channelFeed__sidebar.m-pageLayout__pane--right {
    display: none;
  }

  /* --- Groups Page --- */
  m-groups--profile .m-group__info, .m-group__feeds {
    max-width: revert;
  }

  /* Groups Page Info Section */
  m-groups--profile .m-groupInfo__name.m-group-info-name > div {
    display: flex;
    justify-content: space-between;
  }

  m-groups--profile .m-groupInfo__name.m-group-info-name h1 {
    font-size: 26px;
  }

  /* Groups Page Content Section */
  m-groups--profile m-activity__content {
    width: revert !important;
    margin: auto;
  }

  m-groups--profile m-activity__content .m-activityContent__media--image.m-activityContent__media,
  m-groups--profile m-activity__content .m-activityContent__media--video.m-activityContent__media {
    display: flex;
  }

  m-groups--profile m-activity__content .m-activityContent__media--image.m-activityContent__media a,
  m-groups--profile m-activity__content .m-activityContent__media--video.m-activityContent__media m-videoplayer--scrollaware {
    margin: auto;
  }

  m-groups--profile m-activity__content m-videoplayer--scrollaware {
    height: revert !important;
    width: revert !important;
    min-height: 500px;
    max-height: 750px;
  }

  m-groups--profile m-activity__content .plyr video {
    max-height: 650px;
  }
  `;

    style.innerHTML = mainCss + appendCss;
    style.id = ID;

    // append the style to the DOM in <head> section
    document.head.appendChild(style);
    console.debug("MindsLimitlezz: add CSS");
  }

  function addWidget() {
    const li = document.createElement("li");

    // creates minds-limitlezz-widget
    li.id = "minds-limitlezz-widget";
    li.className =
      "m-sidebarNavigation__item m-sidebarNavigation__item--user ng-star-inserted";
    li.innerHTML = `
        <a id="minds-limitlezz-widget-button"  data-ref="sidenav-channel" 
            onmouseover="this.style.color='#fee43b'" 
            onmouseout="this.style.color='#b8c1ca'"
            >
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M11 15H6L13 1V9H18L11 23V15Z" fill="#fee43b"/></svg>
                <span  
                    class="m-sidebarNavigationItem__text m-legible"
                    style="font-weight: 700;font-size: 19px;line-height: 24px;"
                    > Minds Limitlezz </span>
        </a>
        <div id="minds-limitlezz-widget-panel" style="display:block">
            <div class="minds-limitlezz-widget-auto-scroller">
                <span class="marr4">Auto Scroller</span>
                </br>
                <input id="auto-distance" class="marr4" type="number" style="width: 40px" value="25">
                <span class="marr4">px</span>
                <input id="auto-time" class="marr4" type="number" style="width: 40px" value="100">
                <span>ms</span>
                </br>
                <a id="auto-start" class="marr4 button green">START</a>
                <a id="auto-stop" class="marr4 button red">STOP</a>
            </div>
            <div class="minds-limitlezz-widget-auto-scroller">
                <span class="marr4">Hide Content</span>
                </br>
                <a id="hide-reminded" class="marr4 button red-view">HIDE REMINDED</a>
                <a id="hide-embedded" class="marr4 button red-view">HIDE EMBEDDED</a>
                <a id="hide-media-free" class="marr4 button red-view">HIDE MEDIA FREE</a>
                <a id="hide-outdated" class="marr4 button red-view">HIDE OUTDATED</a>
                <input id="activate-hotkeys" type="checkbox"> <span>Activate Hotkeys</span><br>
                <input id="activate-gridview" type="checkbox"> <span>Activate Feed Grid View</span>
            </div>
        </div>
    `;

    document
      .getElementsByClassName("m-sidebarNavigation__list")[0]
      .appendChild(li);

    const widget = document.getElementById("minds-limitlezz-widget-button");
    widget.addEventListener("click", () => {
      const panel = widget.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      }
      else {
        panel.style.display = "block";
      }
    });

    addAutoScroller();
    addContentHider();

    console.debug("MindsLimitlezz: add widget");
  }
  
  function addAutoScroller() {
    const autoDistance = document.getElementById("auto-distance");
    const autoTime = document.getElementById("auto-time");
    const autoStart = document.getElementById("auto-start");
    const autoStop = document.getElementById("auto-stop");
    const activateHotkeys = document.getElementById("activate-hotkeys");
    const activateGridView = document.getElementById("activate-gridview");

    let stopAuto,
      timeInMs = 100,
      distanceInPx = 25,
      state = 0;
    let checkedActivateHotkeys = false,
      checkedActivateGridView = false;

    const start = () => {
      //document.body.scrollHeight scrollTo
      stopAuto = setInterval(() => window.scrollBy(0, distanceInPx), timeInMs);
      autoStart.style.display = "none";
      autoStop.style.display = "block";
      state = 1;
    };

    const stop = () => {
      clearInterval(stopAuto);
      autoStop.style.display = "none";
      autoStart.style.display = "block";
      state = 0;
    };

    autoDistance.addEventListener("change", (el) => {
      distanceInPx = el.target.value;
    });
    autoTime.addEventListener("change", (el) => {
      timeInMs = el.target.value;
    });
    activateHotkeys.addEventListener("change", (el) => {
      checkedActivateHotkeys = el.target.checked;
    });
    activateGridView.addEventListener("change", (el) => {
      checkedActivateGridView = el.target.checked;
      if (checkedActivateGridView) {
        addGridViewCSS();
        timeInMs = 2000;
        autoTime.value = timeInMs;
        distanceInPx = 750;
        autoDistance.value = distanceInPx;
      }
      else {
        removeGridView();
        timeInMs = 100;
        autoTime.value = timeInMs;
        distanceInPx = 25;
        autoDistance.value = distanceInPx;
      }
    });
    autoStart.addEventListener("click", () => {
      start();
    });
    autoStop.addEventListener("click", () => {
      stop();
    });

    window.onkeydown = (e) => {
      if (checkedActivateHotkeys) {
        if (e.keyCode == 32) {
          if (state === 1) {
            stop();
          }
          else if (state === 0) {
            start();
          }
        }
        return !(e.keyCode == 32);
      }
    };
  }

  function addContentHider() {
    const hideReminded = document.getElementById("hide-reminded");
    const hideEmbedded = document.getElementById("hide-embedded");
    const hideMediaFree = document.getElementById("hide-media-free");
    const hideOutdated = document.getElementById("hide-outdated");

    hideReminded.addEventListener("click", () => {
      const items = document.getElementsByTagName("m-activity");
      for (let i = 0; i < items.length; i++) {
        if (
          (items[i].innerHTML.includes("Reminded") ||
            items[i].innerHTML.includes("remindIcon")) &&
          items[i].style.display != "none"
        ) {
          items[i].style.display = "none";
        }
      }
    });
    hideEmbedded.addEventListener("click", () => {
      const items = document.getElementsByTagName("m-activity");
      for (let i = 0; i < items.length; i++) {
        if (
          items[i].innerHTML.includes("minds-rich-embed") &&
          items[i].style.display != "none"
        ) {
          items[i].style.display = "none";
        }
      }
    });
    hideMediaFree.addEventListener("click", () => {
      const items = document.getElementsByTagName("m-activity");
      for (let i = 0; i < items.length; i++) {
        if (
          !items[i].innerHTML.includes("m-activityContent__media--image") &&
          !items[i].innerHTML.includes("m-activityContent__media--video") &&
          items[i].style.display != "none"
        ) {
          items[i].style.display = "none";
        }
      }
    });
    hideOutdated.addEventListener("click", () => {
      const items = document.getElementsByTagName("m-publishercard");
      for (let i = 0; i < items.length; i++) {
        if (
          !items[i].innerHTML.includes("m-publisherCardAvatar--hasMarker") &&
          items[i].style.display != "none"
        ) {
          items[i].style.display = "none";
        }
      }
    });
  }

  function addGridViewCSS() {
    const gridviewCSS = `
    m-tophighlights,
    m-feednotice__outlet {
      display: none;
    }

    m-groups--profile .minds-list > div:nth-child(1),
    m-newsfeed--subscribed .minds-list,
    m-channel__feed .m-channelFeedList__entities,
    m-groupsmemberships div.ng-star-inserted {
      display: grid;
      grid-template-columns: 33% 33% 33%;
    }

    m-groupsmemberships div.ng-star-inserted {
      column-gap: 15px;
    }

    m-groups--profile m-activity.m-border:nth-child(1) > m-activity:nth-child(1) > div:nth-child(1) > div:nth-child(1) > m-hovercard:nth-child(1) > div:nth-child(1),
    m-newsfeed--subscribed m-activity.m-border:nth-child(1) > m-activity:nth-child(1) > div:nth-child(1) > div:nth-child(1) > m-hovercard:nth-child(1) > div:nth-child(1),
    m-channel__feed m-activity.m-border:nth-child(1) > m-activity:nth-child(1) > div:nth-child(1) > div:nth-child(1) > m-hovercard:nth-child(1) > div:nth-child(1) {
      display: none;
    }

    m-groups--profile m-group-profile__feed.ng-star-inserted,
    m-newsfeed--subscribed m-group-profile__feed.ng-star-inserted,
    m-channel__feed m-group-profile__feed.ng-star-inserted {
      width: 100%;
    }

    m-groups--profile .m-group__feeds,
    m-newsfeed--subscribed .m-group__feeds,
    m-channel__feed .m-group__feeds {
      max-width: revert;
    }

    m-groups--profile .m-mindsList__tools,
    m-newsfeed--subscribed .m-mindsList__tools,
    m-channel__feed .m-mindsList__tools {
      display: none;
    }

    /* --- Group Memberships --- */
    m-publishercard {
      max-height: 200px;
      max-width: 420px;
    }

    m-publishercard .m-publisherCard {
      padding: 16px !important;
    }

    m-publishercard .m-publisherCard .m-publisherCard__inner {
      width: calc(420px - 32px);
    }

    m-publishercard .m-publisherCardOwnerRow__owner {
      width: revert !important;
    }

    m-publishercard .m-publisherCard__desc {
      display: none !important;
    }

    /* Content Remind */
    m-newsfeed--subscribed .m-activity__flagRow,
    m-channel__feed .m-activity__flagRow {
      padding-bottom: revert !important;
      height: 2px;
      background-color: purple;
    }

    m-newsfeed--subscribed .m-activity__flagRow m-activity__flag,
    m-channel__feed .m-activity__flagRow m-activity__flag {
      display: none;
    }

    /* Content Element */
    m-groups--profile m-activity .m-activityOwnerBlock__groupName.m-activityOwnerBlock__truncate.ng-star-inserted,
    m-newsfeed--subscribed m-activity .m-activityOwnerBlock__groupName.m-activityOwnerBlock__truncate.ng-star-inserted,
    m-channel__feed m-activity .m-activityOwnerBlock__groupName.m-activityOwnerBlock__truncate.ng-star-inserted {
      display: none;
    }

    m-groups--profile m-activity .m-activityContentText__innerWrapper,
    m-newsfeed--subscribed m-activity .m-activityContentText__innerWrapper,
    m-channel__feed m-activity .m-activityContentText__innerWrapper {
      height: 2px;
      background-color: aqua;
      padding: 0 !important;
    }

    m-groups--profile m-activity .m-activityContentText__body,
    m-groups--profile m-activity .m-activityContentText__title,
    m-newsfeed--subscribed m-activity .m-activityContentText__body,
    m-newsfeed--subscribed m-activity .m-activityContentText__title,
    m-channel__feed m-activity .m-activityContentText__body,
    m-channel__feed m-activity .m-activityContentText__title {
      display: none;
    }

    m-groups--profile m-activity .m-activityContent__media--image img,
    m-newsfeed--subscribed m-activity .m-activityContent__media--image img,
    m-channel__feed m-activity .m-activityContent__media--image img {
      width: 100% !important;
      height: 650px !important;
      max-height: 650px !important;
    }
    
    m-groups--profile m-activity m-videoPlayer, m-videoPlayer--scrollaware,
    m-newsfeed--subscribed m-activity m-videoPlayer, m-videoPlayer--scrollaware,
    m-channel__feed m-activity m-videoPlayer, m-videoPlayer--scrollaware {
      width: 100% !important;
      height: 650px !important;
      max-height: 650px !important;
    }

    m-groups--profile m-activity minds-button-thumbs-down a,
    m-groups--profile m-activity minds-button-comment a,
    m-groups--profile m-activity m-supermind__button m-button,
    m-newsfeed--subscribed m-activity minds-button-thumbs-down a,
    m-newsfeed--subscribed m-activity minds-button-comment a,
    m-newsfeed--subscribed m-activity m-supermind__button m-button,
    m-channel__feed m-activity minds-button-thumbs-down a,
    m-channel__feed m-activity minds-button-comment a,
    m-channel__feed m-activity m-supermind__button m-button {
      display: none;
    }
    
    m-groups--profile m-activity minds-button-thumbs-down, 
    m-groups--profile m-activity minds-button-comment, 
    m-groups--profile m-activity m-supermind__button,
    m-newsfeed--subscribed m-activity minds-button-thumbs-down, 
    m-newsfeed--subscribed m-activity minds-button-comment, 
    m-newsfeed--subscribed m-activity m-supermind__button,
    m-channel__feed m-activity minds-button-thumbs-down, 
    m-channel__feed m-activity minds-button-comment, 
    m-channel__feed m-activity m-supermind__button {
      max-width: 0px;
    }
    
    m-groups--profile m-activity .m-activityTop__avatarColumn.m-activity__avatar.ng-star-inserted,
    m-newsfeed--subscribed m-activity .m-activityTop__avatarColumn.m-activity__avatar.ng-star-inserted,
    m-channel__feed m-activity .m-activityTop__avatarColumn.m-activity__avatar.ng-star-inserted {
      display: none;
    }
    
    m-groups--profile m-activity m-comments__entityoutletv2,
    m-newsfeed--subscribed m-activity m-comments__entityoutletv2,
    m-channel__feed m-activity m-comments__entityoutletv2 {
      display: none !important;
    }

    m-groups--profile m-activity m-activitycontent__multiimage,
    m-newsfeed--subscribed m-activity m-activitycontent__multiimage,
    m-channel__feed m-activity m-activitycontent__multiimage {
      width: 367px;
    }
    
    m-groups--profile m-activity m-activitycontent__multiimage > div,
    m-newsfeed--subscribed m-activity m-activitycontent__multiimage > div,
    m-channel__feed m-activity m-activitycontent__multiimage > div {
      padding-bottom: 650px !important;
    }

    m-groups--profile m-activity m-activitycontent__multiimage > div:nth-child(1),
    m-newsfeed--subscribed m-activity m-activitycontent__multiimage > div:nth-child(1),
    m-channel__feed m-activity m-activitycontent__multiimage > div:nth-child(1) {
      padding-bottom: 650px;
    }

    /* Embeds */
    m-groups--profile m-activity minds-rich-embed a.thumbnail,
    m-newsfeed--subscribed m-activity minds-rich-embed a.thumbnail,
    m-channel__feed m-activity minds-rich-embed a.thumbnail {
      height: 650px;
    }

    m-groups--profile m-activity minds-rich-embed a.thumbnail img,
    m-newsfeed--subscribed m-activity minds-rich-embed a.thumbnail img,
    m-channel__feed m-activity minds-rich-embed a.thumbnail img {
        width: 100% !important;
        height: 100% !important;
        max-height: revert !important;
      }
    }

    m-groups--profile m-activity minds-rich-embed .m-activityContent__media--richEmbed .meta,
    m-groups--profile m-activity minds-rich-embed .m-rich-embed-src a.meta,
    m-groups--profile m-activity minds-rich-embed.m-richEmbed--activity--row .m-activityContent__media--richEmbed .meta,
    m-groups--profile m-activity minds-rich-embed.m-richEmbed--activity--row .m-rich-embed-src a.meta,
    m-newsfeed--subscribed m-activity minds-rich-embed .m-activityContent__media--richEmbed .meta,
    m-newsfeed--subscribed m-activity minds-rich-embed .m-rich-embed-src a.meta,
    m-newsfeed--subscribed m-activity minds-rich-embed.m-richEmbed--activity--row .m-activityContent__media--richEmbed .meta,
    m-newsfeed--subscribed m-activity minds-rich-embed.m-richEmbed--activity--row .m-rich-embed-src a.meta,
    m-channel__feed m-activity minds-rich-embed .m-activityContent__media--richEmbed .meta,
    m-channel__feed m-activity minds-rich-embed .m-rich-embed-src a.meta,
    m-channel__feed m-activity minds-rich-embed.m-richEmbed--activity--row .m-activityContent__media--richEmbed .meta,
    m-channel__feed m-activity minds-rich-embed.m-richEmbed--activity--row .m-rich-embed-src a.meta {
      display: none !important;
     }
    `;

    addCSS(gridviewCSS);

    if (document.URL === "https://www.minds.com/groups/memberships") {
      // document.getElementsByTagName("infinite-scroll")[0].addEventListener("scroll", () => {
      window.addEventListener("scroll", highlightNew);
    }
  }

  function removeGridView() {
    const gridviewCSS = `
    m-groups--profile m-activity__content m-activitycontent__multiimage,
    m-newsfeed--subscribed m-activity__content m-activitycontent__multiimage,
    m-channel__feed m-activity__content m-activitycontent__multiimage {
      min-height: 750px;
      min-width: 750px;
    }
    `;

    addCSS(gridviewCSS);

    window.removeEventListener("scroll", highlightNew);
  }

  function highlightNew() {
    const items = document.getElementsByTagName("m-publishercard");
    for (let i = 0; i < items.length; i++) {
      if (
        items[i].innerHTML.includes("m-publisherCardAvatar--hasMarker") &&
        items[i].children[0].style["background-color"] != mindsBlue
      ) {
        items[i].children[0].style["background-color"] = mindsBlue;
      }
    }
  }

  // Source: https://stackoverflow.com/a/61511955
  // Wait for element to load
  function waitForElm(selector) {
    return new Promise((resolve) => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
      }

      const observer = new MutationObserver(() => {
        if (document.querySelector(selector)) {
          resolve(document.querySelector(selector));
          observer.disconnect();
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    });
  }

  // --- MAIN --- //
  removeGridView();

  waitForElm(".m-sidebarNavigation__list").then(() => {
    addWidget();
    // reorganizeMenu();
  });
})();
