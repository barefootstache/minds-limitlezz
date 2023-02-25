export const mainWidget = `
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