import { Analytics } from "./modules/analytics";
import { Global, Meta } from "./modules/global";
import { GridView } from "./modules/GridView/gridView";
import { Widget } from "./modules/Widget/widget";

// Source: https://stackoverflow.com/a/61511955
// Wait for element to load
function waitForElm(selector: any) {
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
GridView.removeGridView();

const MindsLimitlezz: Meta = {
  analytics: false,
};
Global.set(MindsLimitlezz);

waitForElm(".m-sidebarNavigation__list").then(() => {
  Widget.addWidget();
});

if (document.URL === "https://www.minds.com/notifications/v3") {
  waitForElm("infinite-scroll").then(() => {
    Analytics.addAnalyticsWidget();
  });
} else {
  Analytics.removeAnalyticsWidget();
}
