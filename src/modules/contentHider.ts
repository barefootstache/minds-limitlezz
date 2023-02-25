export class ContentHider {
  static hideContentWidget() {
    const hideOutdated = document.getElementById("hide-outdated");
    const hideReminded = document.getElementById("hide-reminded");
    const hideEmbedded = document.getElementById("hide-embedded");
    const hideMediaFree = document.getElementById("hide-media-free");

    if (location.href === "https://www.minds.com/groups/memberships") {
      hideOutdated.style.display = "block";
      hideReminded.style.display = "none";
      hideEmbedded.style.display = "none";
      hideMediaFree.style.display = "none";
    } else {
      hideOutdated.style.display = "none";
      hideReminded.style.display = "block";
      hideEmbedded.style.display = "block";
      hideMediaFree.style.display = "block";
    }
  }

  static addContentHider() {
    const hideReminded = document.getElementById("hide-reminded");
    const hideEmbedded = document.getElementById("hide-embedded");
    const hideMediaFree = document.getElementById("hide-media-free");
    const hideOutdated = document.getElementById("hide-outdated");

    hideReminded.addEventListener("click", () => {
      const items = document.getElementsByTagName("m-activity") as HTMLCollectionOf<HTMLElement>;
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
      const items = document.getElementsByTagName("m-activity") as HTMLCollectionOf<HTMLElement>;
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
      const items = document.getElementsByTagName("m-activity") as HTMLCollectionOf<HTMLElement>;
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
      const items = document.getElementsByTagName("m-publishercard") as HTMLCollectionOf<HTMLElement>;
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
}
