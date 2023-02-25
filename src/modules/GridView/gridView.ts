import { Minds } from "../global";
import { Widget } from "../Widget/widget";
import { gridviewActiveCSS, gridviewInactiveCSS } from "./gridView.css";

export class GridView {
  static addGridViewCSS() {
    Widget.addCSS(gridviewActiveCSS);

    if (document.URL === "https://www.minds.com/groups/memberships") {
      // document.getElementsByTagName("infinite-scroll")[0].addEventListener("scroll", () => {
      window.addEventListener("scroll", this.highlightNew);
    }
  }

  static removeGridView() {
    Widget.addCSS(gridviewInactiveCSS);

    window.removeEventListener("scroll", this.highlightNew);
  }

  private static highlightNew() {
    const items = document.getElementsByTagName("m-publishercard");
    for (let i = 0; i < items.length; i++) {
      const firstChild = items[i].children[0] as HTMLElement;
      if (
        items[i].innerHTML.includes("m-publisherCardAvatar--hasMarker") &&
        firstChild.style.getPropertyValue("background-color") != Minds.blue
      ) {
        firstChild.style.setProperty("background-color", Minds.blue);
      }
    }
  }
}
