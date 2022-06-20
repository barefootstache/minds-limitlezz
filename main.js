// ==UserScript==
// @name          Minds Limitlezz
// @version       1.1
// @updateURL     https://raw.githubusercontent.com/lynxdingo/mindslimitlezz/main.user.js
// @description   Upgrade your Minds experience
// @include       https://www.minds.com/*
// @copyright     2022, lynxdingo (https://openuserjs.org/users/lynxdingo)
// @license       MIT
// ==/UserScript==

(function () {
  "use strict";

  function addCSS() {
    // create style element
    const style = document.createElement("style");

    // add CSS styles
    style.innerHTML = `
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
    width: 100px;
    text-align: center;
    margin: 4px;
  }

  .minds-limitlezz-widget-auto-scroller .button.green {
    display: block;
  }
  .minds-limitlezz-widget-auto-scroller .button.green:hover {
    color: green;
    border-color: green;
  }

  .minds-limitlezz-widget-auto-scroller .button.red {
    display: none;
  }
  .minds-limitlezz-widget-auto-scroller .button.red:hover {
    color: red;
    border-color: red;
  }
  `;

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
                <img  height="35" width="35" alt="" src="https://www.shareicon.net/data/512x512/2016/09/21/830287_lightning_512x512.png">
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
        </div>
    `;

    document
      .getElementsByClassName("m-sidebarNavigation__list")[0]
      .appendChild(li);

    const widget = document.getElementById("minds-limitlezz-widget-button");
    widget.addEventListener("click", () => {
      //this.classList.toggle("active");
      const panel = widget.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });

    addAutoScroller();

    console.debug("MindsLimitlezz: add widget");
  }

  function addAutoScroller() {
    const autoDistance = document.getElementById("auto-distance");
    const autoTime = document.getElementById("auto-time");
    const autoStart = document.getElementById("auto-start");
    const autoStop = document.getElementById("auto-stop");

    let stop,
      timeInMs = 100,
      distanceInPx = 25;

    autoDistance.addEventListener("change", (el) => {
      distanceInPx = el.target.value;
    });
    autoTime.addEventListener("change", (el) => {
      timeInMs = el.target.value;
    });
    autoStart.addEventListener("click", () => {
      //document.body.scrollHeight scrollTo
      stop = setInterval(() => window.scrollBy(0, distanceInPx), timeInMs);
      autoStart.style.display = "none";
      autoStop.style.display = "block";
    });
    autoStop.addEventListener("click", () => {
      clearInterval(stop);
      autoStop.style.display = "none";
      autoStart.style.display = "block";
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
  addCSS();

  waitForElm(".m-sidebarNavigation__list").then(() => {
    addWidget();
  });
})();
