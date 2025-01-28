// ==UserScript==
// @name          Minds Limitlezz
// @version       1.13.0
// @namespace     https://github.com/barefootstache/minds-limitlezz
// @icon          https://raw.githubusercontent.com/barefootstache/minds-limitlezz/main/assets/svg/lightning-bolt.svg
// @description   Upgrade your Minds experience
// @include       https://www.minds.com/*
// @copyright     2022-2025, barefootstache (https://openuserjs.org/users/barefootstache)
// @license       MIT
// @updateURL     https://openuserjs.org/meta/barefootstache/Minds_Limitlezz.meta.js
// @downloadURL   https://openuserjs.org/install/barefootstache/Minds_Limitlezz.user.js
// ==/UserScript==

(function () {
  "use strict";

  const mindsBlue = "#1b85d6";
  // --- GLOBAL --- //
  let currentLoadUrl = document.URL;
  let activityItemsLength = 0;
  let activityItemsLength2 = 0;

  function addCSS(appendCss = "") {
    const ID = "MINDS_LIMITLEZZ";

    // get or create style element
    const style = document.getElementById(ID) ?
      document.getElementById(ID) :
      document.createElement("style");

    // add CSS styles
    const mainCss = `
  :root {
    --default-container-height: 650px;
  }

  .m-button:focus {
  	background-color: var(--primary-action-dark) !important;
  }

  /* Removes max width */
  .m-pageLayout__container {
    max-width: revert;
    padding: 0 20px;
  }

  /* Removes super mind button */
  m-supermind__button,
  m-activity__toolbar .m-activityToolbar__largeActions,
  m-activity__boostbutton {
	  display: none !important;
  }

  /* Newsfeed page */
  m-feednotice--plusupgrade,
  m-feednotice--invitefriends,
  m-feednotice--boostlatestpost,
  m-feednotice--enablepushnotifications,
  m-newsfeed--boost-rotator,
  m-featured-content, 
  .m-newsfeed--boost-sidebar,
  .minds-limitlezz-widget-hide,
  .m-groupGrid__right.m-pageLayout__pane--right,
  .m-groupsMemberships__sidebar {
    display: none;
  }

  .m-topbar__middleColumn {
    width: calc(100% - 50px);
  }

  m-channelrecommendation,
  m-feednotice__switch {
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
    height: 500px;
  }

  #minds-limitlezz-widget-panel {
    padding: 0 18px;
    display: block;
    background-color: black;
    overflow: hidden;
    margin-top: 10px;
  }

  #minds-limitlezz-widget-panel span {
		color: #b9bbc0;
	}

  #minds-limitlezz-widget-button {
    text-decoration: none;
    cursor: pointer;
  }

  .minds-limitlezz-widget-section .marr4 {
    margin-right: 4px;
  }

	.minds-limitlezz-widget-section .cursor-pointer:hover {
		cursor: pointer;
    color: #fee43b;
	}

  .minds-limitlezz-widget-section .button {
    background-color: #333;
    padding: 4px;
    cursor: pointer;
    border: 1px solid #555;
    width: 120px;
    text-align: center;
    margin: 4px;
  }

  .minds-limitlezz-widget-section .button.green,
  .minds-limitlezz-widget-section .button.red-view {
    display: block;
  }
  
  .minds-limitlezz-widget-section .button.green:hover {
    color: green;
    border-color: green;
  }

  .minds-limitlezz-widget-section .button.red {
    display: none;
  }

  .minds-limitlezz-widget-section .button.red:hover,
  .minds-limitlezz-widget-section .button.red-view:hover {
    color: red;
    border-color: red;
  }

  /* --- Modal --- */
  .plyr video {
    max-height: 750px;
  }

  /* --- Channel Page --- */
  m-channel__feed .m-pageLayout__pane--main {
    max-width: revert !important;
  }

  m-channel__feed .m-channelFeed__sidebar.m-pageLayout__pane--right {
    display: none;
  }

  /* --- Groups Page --- */
  m-group__feed .m-group__info, .m-group__feed {
    max-width: revert;
  }

  /* Groups Page Info Section */
  m-group__feed .m-groupInfo__name.m-group-info-name > div {
    display: flex;
    justify-content: space-between;
  }

  m-group__feed .m-groupInfo__name.m-group-info-name h1 {
    font-size: 26px;
  }

  /* Groups Page Content Section */
  m-group__feed .m-groupFeed__body {
  	max-width: 1180px;
  }

  m-group__feed m-activity__content {
    width: revert !important;
    margin: auto;
  }

  m-group__feed m-activity__content .m-activityContent__media--image.m-activityContent__media,
  m-group__feed m-activity__content .m-activityContent__media--video.m-activityContent__media {
    display: flex;
  }

  m-group__feed m-activity__content .m-activityContent__media--image.m-activityContent__media a,
  m-group__feed m-activity__content .m-activityContent__media--video.m-activityContent__media m-videoplayer--scrollaware {
    margin: auto;
  }

  m-group__feed m-activity__content .m-activityContent__media--image.m-activityContent__media img {
    height: unset !important;
    width: unset !important;
  }

  m-group__feed .m-activityContent__media--video .m-videoPlayer__placeholder {
    padding-top: 500px !important;
  }

  m-group__feed m-activity__content m-videoplayer--scrollaware {
    height: revert !important;
    width: revert !important;
    min-height: 500px;
    max-height: 750px;
    min-width: 300px;
  }

  m-group__feed m-activity__content .plyr video {
    max-height: var(--default-grid-container-height);
  }

  /* --- Explore Page --- */
	.m-discovery__sidebar {
		display: none;
	}

  /* --- Screen Size: 480px - 1040px --- */
	@media screen and (min-width: 480px) and (max-width: 1040px) {
		.m-pageLayout__container {
			margin: 0;
			width: revert;
		}
	}

	/* --- Screen Size: < 1220px --- */
	@media screen and (max-width: 1220px) {
		.m-pageLayout__pane--left {
			min-width: 170px;
			width: 170px;
		}
		.m-sidebarNavigation {
			width: 170px !important;
		}
		.less-than-1220 {
			display: none;
		}
		#minds-limitlezz-widget-panel {
			padding: 0 12px;
		}
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
                    > Limitlezz </span>
        </a>
        <div id="minds-limitlezz-widget-panel" style="display:block">
            <div class="minds-limitlezz-widget-section">
                <span class="marr4">Auto Scroller</span>
                </br>
                <input id="auto-distance" class="marr4" type="number" style="width: 40px" value="25">
                <span class="marr4">px</span>
                <input id="auto-time" class="marr4" type="number" style="width: 40px" value="100">
                <span>ms</span>
                </br>
                <a id="auto-start" class="marr4 button green" title="Starts the Auto Scroller.">START</a>
                <a id="auto-stop" class="marr4 button red" title="stops the Auto Scroller.">STOP</a>
                <a id="activate-hotkeys" class="cursor-pointer"><input id="activate-hotkeys-checkbox" type="checkbox"> <span class="less-than-1220">Activate </span><span>Hotkeys</span></a>
            </div>
            <div class="minds-limitlezz-widget-section" style="border-top: 1px #fee43b solid">
                <span class="marr4">Hide Content</span>
                </br>
                <a id="hide-reminded" class="marr4 button red-view" title="Hides posts that were reminded.">HIDE REMINDED</a>
                <a id="hide-embedded" class="marr4 button red-view" title="Hides posts that have an embed website.">HIDE EMBEDDED</a>
                <a id="hide-media-free" class="marr4 button red-view" title="Hides posts that do not contain either an image or video.">HIDE MEDIA FREE</a>
                <!-- <a id="hide-outdated" class="marr4 button red-view">HIDE OUTDATED</a> -->
								<a id="hide-boosted" class="marr4 button red-view" title="Hides posts that were boosted.">HIDE BOOSTED</a>
								<a id="hide-fediverse" class="marr4 button red-view" title="Hides posts from the fediverse.">HIDE FEDIVERSE</a>
                <a id="activate-gridview" class="cursor-pointer"><input id="activate-gridview-checkbox" type="checkbox"> <span class="less-than-1220">Activate </span><span>Feed Grid View</span></a>
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
  
  function switchGridView(isActive) {
    let timeInMs, distanceInPx;
    if (isActive) {
      addGridViewCSS();
      timeInMs = 2000;
      distanceInPx = 750;
    }
    else {
      removeGridView();
      timeInMs = 100;
      distanceInPx = 25;
    }
    return { timeInMs, distanceInPx };
  }
  
  function addAutoScroller() {
    const autoDistance = document.getElementById("auto-distance");
    const autoTime = document.getElementById("auto-time");
    const autoStart = document.getElementById("auto-start");
    const autoStop = document.getElementById("auto-stop");
    const activateHotkeys = document.getElementById("activate-hotkeys");
    const activateHotkeysCheckbox = document.getElementById("activate-hotkeys-checkbox");
    const activateGridView = document.getElementById("activate-gridview");
    const activateGridViewCheckbox = document.getElementById("activate-gridview-checkbox");

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
    activateHotkeysCheckbox.addEventListener("change", (el) => {
      checkedActivateHotkeys = el.target.checked;
    });
    activateHotkeys.addEventListener("click", () => {
      checkedActivateHotkeys = !checkedActivateHotkeys;
      activateHotkeysCheckbox.checked = checkedActivateHotkeys;
    });
    activateGridViewCheckbox.addEventListener("change", (el) => {
      checkedActivateGridView = el.target.checked;
      const scrollerObj = switchGridView(checkedActivateGridView);
      timeInMs = scrollerObj.timeInMs;
      autoTime.value = timeInMs;
      distanceInPx = scrollerObj.distanceInPx;
      autoDistance.value = distanceInPx;
    });
    activateGridView.addEventListener("click", () => {
      checkedActivateGridView = !checkedActivateGridView;
      activateGridViewCheckbox.checked = checkedActivateGridView;
      const scrollerObj = switchGridView(checkedActivateGridView);
      timeInMs = scrollerObj.timeInMs;
      autoTime.value = timeInMs;
      distanceInPx = scrollerObj.distanceInPx;
      autoDistance.value = distanceInPx;
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
    // const hideOutdated = document.getElementById("hide-outdated");
    const hideBoosted = document.getElementById("hide-boosted");
    const hideFediverse = document.getElementById("hide-fediverse");

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
    // hideOutdated.addEventListener("click", () => {
    //   const items = document.getElementsByTagName("m-publishercard");
    //   for (let i = 0; i < items.length; i++) {
    //     if (
    //       !items[i].innerHTML.includes("m-publisherCardAvatar--hasMarker") &&
    //       items[i].style.display != "none"
    //     ) {
    //       items[i].style.display = "none";
    //     }
    //   }
    // });
    hideBoosted.addEventListener("click", () => {
      const items = document.getElementsByTagName("m-newsfeed__entity");
      for (let i = 0; i < items.length; i++) {
        if (
          (items[i].innerHTML.includes("m-boostedflag") || 
          items[i].innerHTML.includes("m-activityFlag--boost")) &&
          items[i].style.display != "none"
        ) {
          items[i].style.display = "none";
        }
      }
    });
    hideFediverse.addEventListener("click", () => {
      const regex = /@[^@]+@[^@]+/;
      const items = document.getElementsByTagName("m-activity");
      for (let i = 0; i < items.length; i++) {
        const author = items[i].querySelectorAll('.m-activityOwnerBlock__nameAndBadge a.m-activityOwnerBlock__secondaryName span')[0].innerText;
        if ( regex.test(author) && items[i].style.display != "none" ) {
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

    m-group__feed .m-groupFeedList__entities,
    m-newsfeed .minds-list,
    m-channel__feed .m-channelFeedList__entities,
		m-newsfeed__gql .m-newsfeed__list,
    m-discovery .m-discoveryFeeds__feed {
      display: grid;
      grid-template-columns: 33% 33% 33%;
    }

    m-groupsmemberships .m-groupsMembershipsList {
      display: grid !important;
      grid-template-columns: 33% 33% 33% !important;
    }

    m-groupsmemberships div.ng-star-inserted {
      column-gap: 15px;
    }

    m-group__feed m-activity.m-border:nth-child(1) > m-activity:nth-child(1) > div:nth-child(1) > div:nth-child(1) > m-hovercard:nth-child(1) > div:nth-child(1),
    m-newsfeed m-activity.m-border:nth-child(1) > m-activity:nth-child(1) > div:nth-child(1) > div:nth-child(1) > m-hovercard:nth-child(1) > div:nth-child(1),
    m-channel__feed m-activity.m-border:nth-child(1) > m-activity:nth-child(1) > div:nth-child(1) > div:nth-child(1) > m-hovercard:nth-child(1) > div:nth-child(1) {
      display: none;
    }

    m-group__feed m-group-profile__feed.ng-star-inserted,
    m-newsfeed m-group-profile__feed.ng-star-inserted,
    m-channel__feed m-group-profile__feed.ng-star-inserted {
      width: 100%;
    }

    m-group__feed .m-group__feed,
    m-newsfeed .m-group__feed,
    m-channel__feed .m-group__feed {
      max-width: revert;
    }

    m-group__feed .m-group__sidebar,
    m-newsfeed .m-mindsList__tools,
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
    m-newsfeed m-activity__flag,
    m-channel__feed m-activity__flag,
    m-discovery m-activity__content.m-activityContent--quote > * {
      padding-bottom: revert !important;
      height: 2px;
      background-color: purple;
    }

    m-newsfeed m-activity__flag .m-activityFlag--remind,
    m-channel__feed m-activity__flag .m-activityFlag--remind {
      display: none;
    }

    /* Content Element */
    m-group__feed m-activity .m-activityOwnerBlock__groupName.m-activityOwnerBlock__truncate.ng-star-inserted,
    m-newsfeed m-activity .m-activityOwnerBlock__groupName.m-activityOwnerBlock__truncate.ng-star-inserted,
    m-channel__feed m-activity .m-activityOwnerBlock__groupName.m-activityOwnerBlock__truncate.ng-star-inserted {
      display: none;
    }

    m-group__feed m-activity .m-activityContentText__innerWrapper,
    m-newsfeed m-activity .m-activityContentText__innerWrapper,
    m-discovery m-activity .m-activityContentText__innerWrapper,
    m-channel__feed m-activity .m-activityContentText__innerWrapper {
      height: 2px;
      background-color: aqua;
      padding: 0 !important;
    }

    m-group__feed m-activity .m-activityContentText__body,
    m-group__feed m-activity .m-activityContentText__title,
    m-newsfeed m-activity .m-activityContentText__body,
    m-newsfeed m-activity .m-activityContentText__title,
    m-discovery__feeditem m-activity .m-activityContentText__body,
    m-discovery__feeditem m-activity .m-activityContentText__title,
    m-discovery m-activity .m-activityContentText__innerWrapper *,
    m-channel__feed m-activity .m-activityContentText__body,
    m-channel__feed m-activity .m-activityContentText__title {
      display: none;
    }

    m-group__feed m-activity .m-activityContent__media--image img,
    m-newsfeed m-activity .m-activityContent__media--image img,
    m-discovery__feeditem m-activity .m-activityContent__media--image img,
    m-channel__feed m-activity .m-activityContent__media--image img {
      width: 100% !important;
      max-height: var(--default-grid-container-height) !important;
      height: unset !important;
    }

    m-group__feed m-activity .m-activityContent__media,
    m-group__feed m-activity .m-activityContent__media--richEmbed,
    m-group__feed m-activity .m-activityContent__quote,
    m-group__feed m-activity .m-activityContent__quote m-activity__quote,
    m-newsfeed m-activity .m-activityContent__media,
    m-newsfeed m-activity .m-activityContent__media--richEmbed,
    m-newsfeed m-activity .m-activityContent__quote,
    m-newsfeed m-activity .m-activityContent__quote m-activity__quote,
    m-channel__feed m-activity .m-activityContent__media,
    m-channel__feed m-activity .m-activityContent__media--richEmbed,
    m-channel__feed m-activity .m-activityContent__quote,
    m-discovery__feeditem m-activity .m-activityContent__media,
    m-discovery__feeditem m-activity .m-activityContent__media--richEmbed
    m-discovery__feeditem m-activity .m-activityContent__quote {
      max-height: var(--default-grid-container-height) !important;
      height: var(--default-grid-container-height);
      align-content: center;
    }

    m-channel__feed m-activity .m-activityContent__quote m-activity__quote {
      max-height: calc(var(--default-grid-container-height) - 2rem) !important;
      height: calc(var(--default-grid-container-height) - 2rem);
      align-content: center;
    }

    m-activity__quote m-activity__content .m-activityContent__media {
      max-height: calc(var(--default-grid-container-height) - 58px - 2rem) !important;
    }
    
    m-group__feed m-activity m-videoPlayer, m-videoPlayer--scrollaware,
    m-newsfeed m-activity m-videoPlayer, m-videoPlayer--scrollaware,
    m-channel__feed m-activity m-videoPlayer, m-videoPlayer--scrollaware {
      width: 100% !important;
      max-height: var(--default-grid-container-height) !important;
      min-width: 300px;
    }

    m-group__feed m-activity minds-button-thumbs-down a,
    m-group__feed m-activity minds-button-comment a,
    m-group__feed m-activity m-supermind__button m-button,
    m-newsfeed m-activity minds-button-thumbs-down a,
    m-newsfeed m-activity minds-button-comment a,
    m-newsfeed m-activity m-supermind__button m-button,
    m-channel__feed m-activity minds-button-thumbs-down a,
    m-channel__feed m-activity minds-button-comment a,
    m-channel__feed m-activity m-supermind__button m-button {
      display: none;
    }
    
    m-group__feed m-activity minds-button-thumbs-down, 
    m-group__feed m-activity minds-button-comment, 
    m-group__feed m-activity m-supermind__button,
    m-newsfeed m-activity minds-button-thumbs-down, 
    m-newsfeed m-activity minds-button-comment, 
    m-newsfeed m-activity m-supermind__button,
    m-channel__feed m-activity minds-button-thumbs-down, 
    m-channel__feed m-activity minds-button-comment, 
    m-channel__feed m-activity m-supermind__button {
      max-width: 0px;
    }
    
    m-group__feed m-activity .m-activityTop__avatarColumn.m-activity__avatar.ng-star-inserted,
    m-newsfeed m-activity .m-activityTop__avatarColumn.m-activity__avatar.ng-star-inserted,
    m-channel__feed m-activity .m-activityTop__avatarColumn.m-activity__avatar.ng-star-inserted {
      display: none;
    }
    
    m-group__feed m-activity m-comments__entityoutletv2,
    m-newsfeed m-activity m-comments__entityoutletv2,
    m-channel__feed m-activity m-comments__entityoutletv2 {
      display: none !important;
    }

    m-group__feed m-activity m-activitycontent__multiimage,
    m-newsfeed m-activity m-activitycontent__multiimage,
    m-channel__feed m-activity m-activitycontent__multiimage {
      width: 367px;
    }
    
    m-group__feed m-activity m-activitycontent__multiimage > div,
    m-newsfeed m-activity m-activitycontent__multiimage > div,
    m-channel__feed m-activity m-activitycontent__multiimage > div {
      padding-bottom: var(--default-grid-container-height) !important;
    }

    m-group__feed m-activity m-activitycontent__multiimage > div:nth-child(1),
    m-newsfeed m-activity m-activitycontent__multiimage > div:nth-child(1),
    m-channel__feed m-activity m-activitycontent__multiimage > div:nth-child(1) {
      padding-bottom: var(--default-grid-container-height);
    }

    /* Embeds */
    m-group__feed m-activity minds-rich-embed a.thumbnail,
    m-newsfeed m-activity minds-rich-embed a.thumbnail,
    m-channel__feed m-activity minds-rich-embed a.thumbnail {
      height: var(--default-grid-container-height);
    }

    m-group__feed m-activity minds-rich-embed a.thumbnail img,
    m-newsfeed m-activity minds-rich-embed a.thumbnail img,
    m-channel__feed m-activity minds-rich-embed a.thumbnail img {
        width: 100% !important;
        height: 100% !important;
        max-height: revert !important;
      }
    }

    m-group__feed m-activity minds-rich-embed .m-activityContent__media--richEmbed .meta,
    m-group__feed m-activity minds-rich-embed .m-rich-embed-src a.meta,
    m-group__feed m-activity minds-rich-embed.m-richEmbed--activity--row .m-activityContent__media--richEmbed .meta,
    m-group__feed m-activity minds-rich-embed.m-richEmbed--activity--row .m-rich-embed-src a.meta,
    m-newsfeed m-activity minds-rich-embed .m-activityContent__media--richEmbed .meta,
    m-newsfeed m-activity minds-rich-embed .m-rich-embed-src a.meta,
    m-newsfeed m-activity minds-rich-embed.m-richEmbed--activity--row .m-activityContent__media--richEmbed .meta,
    m-newsfeed m-activity minds-rich-embed.m-richEmbed--activity--row .m-rich-embed-src a.meta,
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
    } else {
      window.addEventListener("scroll", resizeContainerElement);
    }
  }

  function removeGridView() {
    const gridviewCSS = `
    m-group__feed m-activity__content m-activitycontent__multiimage,
    m-newsfeed m-activity__content m-activitycontent__multiimage,
    m-channel__feed m-activity__content m-activitycontent__multiimage {
      min-height: 750px;
      min-width: 750px;
    }
    `;

    addCSS(gridviewCSS);

    window.removeEventListener("scroll", highlightNew);
  }

  function createClassGroupSelector(parentClasses, childClass) {
    return parentClasses.map(el => `${el} ${childClass}`).reduce((prev, curr) => `${prev}, ${curr}`);
  }
  
  function resizeContainerElement() {
    const pages = ['m-group__feed .m-groupFeedList__entities',
    'm-newsfeed .minds-list',
    'm-channel__feed .m-channelFeedList__entities',
	  'm-newsfeed__gql .m-newsfeed__list',
    'm-discovery .m-discoveryFeeds__feed'];
    const items = document.querySelectorAll(createClassGroupSelector(pages, '.m-activity__top'));
    if(items.length !== activityItemsLength2) {
      const wait1 = createClassGroupSelector(pages, `m-newsfeed__entity:nth-child(${activityItemsLength2+5}) .m-activity__top`);
      const wait2 = createClassGroupSelector(pages, `m-activity:nth-child(${activityItemsLength2+5}) .m-activity__top`);
      waitForElm(`${wait1}, ${wait2}`).then(() => {
        for (let i = activityItemsLength2; i < items.length; i++) {
          const content = items[i].querySelector('m-activity__content');
          const avatar = items[i].querySelector('.m-activityTop__avatarColumn');
          content.style.width = items[i].clientWidth;
          content.style.marginLeft = `-${avatar.clientWidth}px`;
        }
        activityItemsLength2 = items.length;
      });
    }
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

  function reorganizeMenu(){
    const moveItems = [];
    // icon text + span text
    const hideArray = ["trending_upBoost", "add_to_queueMinds+", "tips_and_updatesSupermind", "account_balanceWallet", "volunteer_activismAffiliate", "verifiedUpgrade", "dashboardNetworks"];
    const children = document.getElementsByClassName("m-sidebarNavigation__list")[0].children;
    let cNumber = children[0].attributes[0].nodeName.match(/\d+/);
    for (const child of children) {
      // creates list of items to prepend under "More"
      const moveItem = {
        icon: child.getElementsByTagName('i')[0] ? child.getElementsByTagName('i')[0].textContent : '',
        link: child.getElementsByTagName('a')[0] ? child.getElementsByTagName('a')[0].pathname : '',
        name: child.getElementsByTagName('span')[0] ? child.getElementsByTagName('span')[0].textContent : ''
      }
      moveItems.push(moveItem);
      if(child.textContent === "trending_upBoost") {
        // replace boost item with notifications
        child.innerHTML = `
        <a _ngcontent-m-app-c${cNumber}="" routerlink="/discovery/plus/overview" data-ref="sidenav-plus" href="/notifications/v3">
          <div _ngcontent-m-app-c${cNumber}="" class="m-sidebarNavigationItem__hoverArea">
            <i _ngcontent-m-app-c${cNumber}="" class="material-icons">notifications</i>
            <span _ngcontent-m-app-c${cNumber}="" class="m-sidebarNavigationItem__text m-legible">Notifications</span>
          </div>
        </a>
      `;
      } else if(hideArray.includes(child.textContent)){
        child.className += ' minds-limitlezz-widget-hide';
      }
    }

    // only creates on first load, need to refresh to see again
    waitForElm(".m-sidebarMore__dropdown").then(() => {
      cNumber = document.getElementsByClassName("m-sidebarMore__dropdown")[0].children[0].attributes[0].nodeName.match(/\d+/)
      for (const item of moveItems) {
        const li = document.createElement("li");
        li.className = "m-sidebarMoreDropdown__item ng-star-inserted";
        li.innerHTML = `
          <a _ngcontent-m-app-c${cNumber}="" data-ref="sidebarmore-analytics" href="${item.link}">
            <i _ngcontent-m-app-c${cNumber}="" class="material-icons">${item.icon}</i>
            <span _ngcontent-m-app-c${cNumber}="" class="m-sidebarNavigationItem__text">${item.name}</span>
          </a>
        `
        document.getElementsByClassName("m-sidebarMore__dropdown")[0].prepend(li);
      }
    });
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
    reorganizeMenu();
  });
  
  // Hides boosted content onscroll
  document.addEventListener("scroll", () => {
    let items = [];
    if (currentLoadUrl.startsWith('https://www.minds.com/discovery')) {
    	items = document.getElementsByTagName("m-discovery__feeditem");
    } else {
      items = document.getElementsByTagName("m-activity");
    }
    if(items.length !== activityItemsLength){
      for (let i = activityItemsLength; i < items.length; i++) {
        if (
          (items[i].innerHTML.includes("m-boostedflag") || items[i].innerHTML.includes("m-activityFlag--boost")) &&
          items[i].style.display != "none"
        ) {
          items[i].style.display = "none";
        }
      }
      activityItemsLength = items.length;
    }
  });

  // Resets the boosted onscroll counter
  document.addEventListener("click", () => {
  	if(currentLoadUrl !== document.URL) {
      activityItemsLength = 0;
      currentLoadUrl = document.URL;
    }
  });
})();
