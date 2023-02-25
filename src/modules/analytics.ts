import { Global, Meta } from "./global";

export interface MetaAnalytics {
  activity: string;
  balance: number;
  mid: string;
  date: string;
}

export class Analytics {
  static addAnalyticsWidget() {
    const MindsLimitlezz: Meta = { analytics: true };
    Global.set(MindsLimitlezz);

    const newChild = document.createElement("div");
    newChild.id = "minds-limitlezz-analytics";
    newChild.innerHTML = `
                <div style="height:300px;background-color:red">
                    <ul id="minds-limitlezz-analytics-columns">
                    </ul>
                </div>
            `;

    document.getElementsByTagName("m-notifications__list")[0].prepend(newChild);

    const notificationCss = `
                .m-activityContent__media--image,
                 .m-activityContent__media--video,
                m-notifications__enablepushbanner {
                    display: none;
                }
                
                #minds-limitlezz-analytics-columns,
                #minds-limitlezz-analytics-columns li {
                    display: inline-block;
                }
            `;

    addCSS(notificationCss);

    const notifListElements = document.getElementsByTagName(
      "m-notifications__list"
    )[0].children;

    for (let i = 0; i < notifListElements.length; i++) {
      // assigns id to first <ul> tag
      if (notifListElements[i].tagName.toLowerCase() === "ul") {
        notifListElements[i].id =
          "minds-limitlezz-analytics-notifications-list";
        break;
      }
    }

    let list = notifListElements.namedItem(
      "minds-limitlezz-analytics-notifications-list"
    ).children;
    console.debug(list);
    const analytics = [];

    do {
      setTimeout(() => {
        list = notifListElements.namedItem(
          "minds-limitlezz-analytics-notifications-list"
        ).children;
        console.debug(list);
      }, 5000);
    } while (list.length < 12);

    if (list.length >= 12) {
      for (let j = 0; j < list.length; j++) {
        const meta = this.innerTextToMeta(list[j].innerText);
        console.log({ meta });
        analytics.push(meta);
      }
    }

    const columns = document.getElementById(
      "minds-limitlezz-analytics-columns"
    );

    console.debug(analytics);

    if (analytics.length > 0) {
      for (let a = 0; a < analytics.length; a++) {
        const column = document.createElement("li");
        column.style = `background-color:green;height:${
          analytics[a].balance * 10
        }px;width:20px;margin-right:10px`;
        columns.appendChild(column);
      }
    }

    console.debug("MindsLimitlezz: add Analytics");
  }

  static removeAnalyticsWidget() {
    const MindsLimitlezz = Global.get();
    if (MindsLimitlezz.analytics === true) {
      MindsLimitlezz.analytics = false;
      Global.set(MindsLimitlezz);

      // reset style
      const notificationCss = `
                .m-activityContent__media--image,
                 .m-activityContent__media--video,
                m-notifications__enablepushbanner {
                    display: unset;
                }`;

      addCSS(notificationCss);
      console.debug("MindsLimitlezz: remove Analytics");
    }
  }

  private static innerTextToMeta(innerText: string): MetaAnalytics {
    const charArr = Array.from(innerText);
    const textArr = ["", "", ""];
    let text = 0;
    for (let c = 0; c < charArr.length; c++) {
      if (charArr[c] !== "\n") {
        textArr[text] += charArr[c];
      } else {
        text++;
      }
    }

    const meta: MetaAnalytics = {
      activity: textArr[0],
      balance: 1,
      mid: textArr[1],
      date: textArr[2],
    };

    const midText = meta.mid.split(" and ");
    if (midText.length > 1) {
      meta.balance += Number(midText[1].split(/\D+/)[0]);
    }

    return meta;
  }
}
