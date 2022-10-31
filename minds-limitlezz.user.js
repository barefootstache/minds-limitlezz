// ==UserScript==
// @name          Minds Limitlezz
// @version       1.3
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

  function addCSS(appendCss = "") {
    const ID = "MINDS_LIMITLEZZ";

    // get or create style element
    const style = document.getElementById(ID)
      ? document.getElementById(ID)
      : document.createElement("style");

    // add CSS styles
    const mainCss = `
    /* Removes max width */
    .m-pageLayout__container {
      max-width: revert;
    }

    /* Newsfeed page */
    m-newsfeed--boost-rotator,
  m-featured-content, 
  .m-newsfeed--boost-sidebar,
  .m-groupGrid__right.m-pageLayout__pane--right {
    display:none
  }

  .m-newsfeed--feed.m-pageLayout__pane--main,
  .m-pageLayout__pane--main.m-pageLayout__pane--main {
    width: 100%;
    max-width: 100%;
  }

  m-newsfeed m-activityv2__content .m-activityContent__media--image.m-activityContent__media,
  m-newsfeed m-activityv2__content .m-activityContent__media--video.m-activityContent__media {
    display: flex;
  }

  m-newsfeed m-activityv2__content .m-activityContent__media--image.m-activityContent__media a,
  m-newsfeed m-activityv2__content .m-activityContent__media--video.m-activityContent__media m-videoplayer--scrollaware {
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
    display:none;
  }

  /* Fix margin-bottom for adding Minds Limitlezz Widget */
  m-sidebarmore__trigger {
    margin-bottom:0 !important;
  }

  /* Minds Limitlezz Widget */
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
  m-groups--profile m-activityv2__content {
    width: revert !important;
    margin: auto;
  }

  m-groups--profile m-activityv2__content .m-activityContent__media--image.m-activityContent__media,
  m-groups--profile m-activityv2__content .m-activityContent__media--video.m-activityContent__media {
    display: flex;
  }

  m-groups--profile m-activityv2__content .m-activityContent__media--image.m-activityContent__media a,
  m-groups--profile m-activityv2__content .m-activityContent__media--video.m-activityContent__media m-videoplayer--scrollaware {
    margin: auto;
  }

  m-groups--profile m-activityv2__content m-videoplayer--scrollaware {
    height: revert !important;
    width: revert !important;
    min-height: 500px;
    max-height: 750px;
  }

  m-groups--profile m-activityv2__content .plyr video {
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
								<input id="activate-hotkeys" type="checkbox"> <span>Activate Hotkeys</span><br>
								<input id="activate-gridview" type="checkbox"> <span>Activate Group Grid View</span>
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
      } else {
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
      } else {
        removeGridView();
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
          } else if (state === 0) {
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
  }

  function addGridViewCSS() {
    const gridviewCSS = `
    m-groups--profile .minds-list > div:nth-child(1),
    m-channel__feed .m-channelFeedList__entities {
      display: grid;
      grid-template-columns: 33% 33% 33%;
    }

    m-groups--profile m-activity.m-border:nth-child(1) > m-activityv2:nth-child(1) > div:nth-child(1) > div:nth-child(1) > m-hovercard:nth-child(1) > div:nth-child(1),
    m-channel__feed m-activity.m-border:nth-child(1) > m-activityv2:nth-child(1) > div:nth-child(1) > div:nth-child(1) > m-hovercard:nth-child(1) > div:nth-child(1) {
      display: none;
    }

    m-groups--profile m-group-profile__feed.ng-star-inserted,
    m-channel__feed m-group-profile__feed.ng-star-inserted {
      width: 100%;
    }

    m-groups--profile .m-group__feeds,
    m-channel__feed .m-group__feeds {
      max-width: revert;
    }

    m-groups--profile .m-mindsList__tools,
    m-channel__feed .m-mindsList__tools {
      display: none;
    }

    /* Content Element */
    m-groups--profile m-activityv2 .m-activityOwnerBlock__groupName.m-activityOwnerBlock__truncate.ng-star-inserted,
    m-channel__feed m-activityv2 .m-activityOwnerBlock__groupName.m-activityOwnerBlock__truncate.ng-star-inserted {
      display: none;
    }

    m-groups--profile m-activityv2 .m-activityContentText__innerWrapper,
    m-channel__feed m-activityv2 .m-activityContentText__innerWrapper {
      height: 2px;
      background-color: aqua;
      padding: 0 !important;
    }

    m-groups--profile m-activityv2 .m-activityContentText__body,
    m-groups--profile m-activityv2 .m-activityContentText__title,
    m-channel__feed m-activityv2 .m-activityContentText__body,
    m-channel__feed m-activityv2 .m-activityContentText__title {
      display: none;
    }

    m-groups--profile m-activityv2 .m-activityContent__media--image img,
    m-channel__feed m-activityv2 .m-activityContent__media--image img {
      width: 100% !important;
      height: 650px !important;
      max-height: 650px !important;
    }
    
    m-groups--profile m-activityv2 m-videoPlayer, m-videoPlayer--scrollaware,
    m-channel__feed m-activityv2 m-videoPlayer, m-videoPlayer--scrollaware {
      width: 100% !important;
      height: 650px !important;
      max-height: 650px !important;
    }

    m-groups--profile m-activityv2 minds-button-thumbs-down a,
    m-groups--profile m-activityv2 minds-button-comment a,
    m-groups--profile m-activityv2 m-supermind__button m-button,
    m-channel__feed m-activityv2 minds-button-thumbs-down a,
    m-channel__feed m-activityv2 minds-button-comment a,
    m-channel__feed m-activityv2 m-supermind__button m-button {
      display: none;
    }
    
    m-groups--profile m-activityv2 minds-button-thumbs-down, 
    m-groups--profile m-activityv2 minds-button-comment, 
    m-groups--profile m-activityv2 m-supermind__button,
    m-channel__feed m-activityv2 minds-button-thumbs-down, 
    m-channel__feed m-activityv2 minds-button-comment, 
    m-channel__feed m-activityv2 m-supermind__button {
      max-width: 0px;
    }
    
    m-groups--profile m-activityv2 .m-activityTop__avatarColumn.m-activity__avatar.ng-star-inserted,
    m-channel__feed m-activityv2 .m-activityTop__avatarColumn.m-activity__avatar.ng-star-inserted {
      display: none;
    }
    
    m-groups--profile m-activityv2 m-comments__entityoutletv2,
    m-channel__feed m-activityv2 m-comments__entityoutletv2 {
      display: none !important;
    }

    m-groups--profile m-activityv2 m-activityv2content__multiimage,
    m-channel__feed m-activityv2 m-activityv2content__multiimage {
      width: 367px;
    }
    
    m-groups--profile m-activityv2 m-activityv2content__multiimage > div,
    m-channel__feed m-activityv2 m-activityv2content__multiimage > div {
      padding-bottom: 650px !important;
    }

    m-groups--profile m-activityv2 m-activityv2content__multiimage > div:nth-child(1),
    m-channel__feed m-activityv2 m-activityv2content__multiimage > div:nth-child(1) {
      padding-bottom: 650px;
    }

    /* Embeds */
    m-groups--profile m-activityv2 minds-rich-embed a.thumbnail,
    m-channel__feed m-activityv2 minds-rich-embed a.thumbnail {
      height: 650px;
    }

    m-groups--profile m-activityv2 minds-rich-embed a.thumbnail img,
    m-channel__feed m-activityv2 minds-rich-embed a.thumbnail img {
        width: 100% !important;
        height: 100% !important;
        max-height: revert !important;
      }
    }

    m-groups--profile m-activityv2 minds-rich-embed .m-activityContent__media--richEmbed .meta,
    m-groups--profile m-activityv2 minds-rich-embed .m-rich-embed-src a.meta,
    m-groups--profile m-activityv2 minds-rich-embed.m-richEmbed--activityV2--row .m-activityContent__media--richEmbed .meta,
    m-groups--profile m-activityv2 minds-rich-embed.m-richEmbed--activityV2--row .m-rich-embed-src a.meta,
    m-channel__feed m-activityv2 minds-rich-embed .m-activityContent__media--richEmbed .meta,
    m-channel__feed m-activityv2 minds-rich-embed .m-rich-embed-src a.meta,
    m-channel__feed m-activityv2 minds-rich-embed.m-richEmbed--activityV2--row .m-activityContent__media--richEmbed .meta,
    m-channel__feed m-activityv2 minds-rich-embed.m-richEmbed--activityV2--row .m-rich-embed-src a.meta {
      display: none !important;
     }
    `;

    addCSS(gridviewCSS);
  }

  function removeGridView() {
    const gridviewCSS = `
    m-groups--profile m-activityv2__content m-activityv2content__multiimage,
    m-channel__feed m-activityv2__content m-activityv2content__multiimage {
      min-height: 750px;
      min-width: 750px;
    }
    `;

    addCSS(gridviewCSS);
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
  });
})();
