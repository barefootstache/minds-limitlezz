import { AutoScroller } from "../autoScroller";
import { ContentHider } from "../contentHider";
import { ID } from "../global";
import { mainCss } from "./widget.css";
import { mainWidget } from "./widget.html";

export class Widget {
  static addCSS(appendCss = "") {
    // get or create style element
    const style = document.getElementById(ID)
      ? document.getElementById(ID)
      : document.createElement("style");

    style.innerHTML = mainCss + appendCss;
    style.id = ID;

    // append the style to the DOM in <head> section
    document.head.appendChild(style);
    console.debug("MindsLimitlezz: add CSS");
  }

  static addWidget() {
    const li = document.createElement("li");

    li.id = "minds-limitlezz-widget";
    li.className =
      "m-sidebarNavigation__item m-sidebarNavigation__item--user ng-star-inserted";
    li.innerHTML = mainWidget;

    document
      .getElementsByClassName("m-sidebarNavigation__list")[0]
      .appendChild(li);

    const widget = document.getElementById("minds-limitlezz-widget-button");
    widget.addEventListener("click", () => {
      const panel = widget.nextElementSibling as HTMLElement;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });

    AutoScroller.addAutoScroller();
    ContentHider.addContentHider();

    console.debug("MindsLimitlezz: add widget");
  }
}
