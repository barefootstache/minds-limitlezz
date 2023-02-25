import { GridView } from "./GridView/gridView";

export class AutoScroller {
  static addAutoScroller() {
    const autoDistance = <HTMLInputElement> document.getElementById("auto-distance");
    const autoTime = <HTMLInputElement> document.getElementById("auto-time");
    const autoStart = <HTMLAnchorElement> document.getElementById("auto-start");
    const autoStop = <HTMLAnchorElement> document.getElementById("auto-stop");
    const activateHotkeys = <HTMLInputElement> document.getElementById("activate-hotkeys");
    const activateGridView = <HTMLInputElement> document.getElementById("activate-gridview");

    let stopAuto:NodeJS.Timer,
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

    autoDistance.addEventListener("change", (el:KeyboardEvent) => {
      distanceInPx = el.currentTarget.value;
    });
    autoTime.addEventListener("change", (el:KeyboardEvent) => {
      timeInMs = el.currentTarget.value;
    });
    activateHotkeys.addEventListener("change", (el:InputEvent) => {
      checkedActivateHotkeys = el.currentTarget.checked;
    });
    activateGridView.addEventListener("change", (el:InputEvent) => {
      checkedActivateGridView = el.currentTarget.checked;
      if (checkedActivateGridView) {
        GridView.addGridViewCSS();
        timeInMs = 2000;
        autoTime.value = timeInMs.toString();
        distanceInPx = 750;
        autoDistance.value = distanceInPx.toString();
      } else {
        GridView.removeGridView();
        timeInMs = 100;
        autoTime.value = timeInMs.toString();
        distanceInPx = 25;
        autoDistance.value = distanceInPx.toString();
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
}
