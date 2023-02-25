export const mainCss = `
/* Removes max width */
.m-pageLayout__container {
  max-width: revert;
}

/* Notifications list */
m-notifications__list ul li.ng-star-inserted m-notifications__notification a.m-notification__wrapperLink.ng-star-inserted m-newsfeed__entity.ng-star-inserted m-activity.m-border.m-activity--minimalMode.m-activity--noOwnerBlock.m-activity--v2.ng-star-inserted m-activity.m-activity--minimalMode.m-activity--noOwnerBlock.m-activity--noToolbar.m-activity--isFeed.ng-star-inserted div.m-activity__top div.m-activityTop__mainColumn.ng-star-inserted m-activity__content.m-activityContent--minimalMode.m-activityContent--video.m-activityContent--textlessMedia.ng-star-inserted div.m-activityContent__media--video.m-activityContent__media.ng-star-inserted,
m-notifications__list ul li.ng-star-inserted m-notifications__notification a.m-notification__wrapperLink.ng-star-inserted m-newsfeed__entity.ng-star-inserted m-activity.m-border.m-activity--minimalMode.m-activity--noOwnerBlock.m-activity--v2.ng-star-inserted m-activity.m-activity--minimalMode.m-activity--noOwnerBlock.m-activity--noToolbar.m-activity--isFeed.ng-star-inserted div.m-activity__top div.m-activityTop__mainColumn.ng-star-inserted m-activity__content.m-activityContent--minimalMode.m-activityContent--video.m-activityContent--textlessMedia.ng-star-inserted div.m-activityContent__media--video.m-activityContent__media.ng-star-inserted m-videoplayer--scrollaware,
m-notifications__list ul li.ng-star-inserted m-notifications__notification a.m-notification__wrapperLink.ng-star-inserted m-newsfeed__entity.ng-star-inserted m-activity.m-border.m-activity--minimalMode.m-activity--noOwnerBlock.m-activity--v2.ng-star-inserted m-activity.m-activity--minimalMode.m-activity--noOwnerBlock.m-activity--noToolbar.m-activity--isFeed.ng-star-inserted div.m-activity__top div.m-activityTop__mainColumn.ng-star-inserted m-activity__content.m-activityContent--minimalMode.m-activityContent--video.ng-star-inserted div.m-activityContent__media--video.m-activityContent__media.ng-star-inserted m-videoplayer--scrollaware,
m-notifications__list ul li.ng-star-inserted m-notifications__notification a.m-notification__wrapperLink.ng-star-inserted m-newsfeed__entity.ng-star-inserted m-activity.m-border.m-activity--minimalMode.m-activity--noOwnerBlock.m-activity--v2.ng-star-inserted m-activity.m-activity--minimalMode.m-activity--noOwnerBlock.m-activity--noToolbar.m-activity--isFeed.ng-star-inserted div.m-activity__top div.m-activityTop__mainColumn.ng-star-inserted m-activity__content.m-activityContent--minimalMode.m-activityContent--image.m-activityContent--textlessMedia.ng-star-inserted div.m-activityContent__media--image.m-activityContent__media.ng-star-inserted a.m-activityContentMedia__link.ng-star-inserted img.m-border.ng-star-inserted {
  max-height: 50px;
  max-width: 50px;
  height: 50px;
  width: 50px;
  display: inline-block;
}

m-notifications__list.m-notifications__list--scrolledPastTabs ul li.ng-star-inserted m-notifications__notification a.m-notification__wrapperLink.ng-star-inserted m-newsfeed__entity.ng-star-inserted m-activity.m-border.m-activity--minimalMode.m-activity--noOwnerBlock.m-activity--v2.ng-star-inserted m-activity.m-activity--minimalMode.m-activity--noOwnerBlock.m-activity--noToolbar.m-activity--isFeed.ng-star-inserted div.m-activity__top div.m-activityTop__mainColumn.ng-star-inserted m-activity__content.m-activityContent--minimalMode.m-activityContent--video.m-activityContent--textlessMedia.ng-star-inserted div.m-activityContent__media--video.m-activityContent__media.ng-star-inserted m-videoplayer--scrollaware m-videoplayer.ng-star-inserted div.m-videoPlayer__placeholder.ng-star-inserted i.material-icons.minds-video-play-icon,
m-notifications__list ul li.ng-star-inserted m-notifications__notification a.m-notification__wrapperLink.ng-star-inserted m-newsfeed__entity.ng-star-inserted m-activity.m-border.m-activity--minimalMode.m-activity--noOwnerBlock.m-activity--v2.ng-star-inserted m-activity.m-activity--minimalMode.m-activity--noOwnerBlock.m-activity--noToolbar.m-activity--isFeed.ng-star-inserted div.m-activity__top div.m-activityTop__mainColumn.ng-star-inserted m-activity__content.m-activityContent--minimalMode.m-activityContent--video.ng-star-inserted div.m-activityContent__media--video.m-activityContent__media.ng-star-inserted m-videoplayer--scrollaware m-videoplayer.ng-star-inserted div.m-videoPlayer__placeholder.ng-star-inserted i.material-icons.minds-video-play-icon {
  font-size: 20px;
}

/* Newsfeed page */
m-newsfeed--boost-rotator,
m-featured-content, 
.m-newsfeed--boost-sidebar,
.m-groupGrid__right.m-pageLayout__pane--right,
.m-groupsMemberships__sidebar {
display: none;
}

m-channelrecommendation {
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
m-groups--profile m-activity__content {
width: revert !important;
margin: auto;
}

m-groups--profile m-activity__content .m-activityContent__media--image.m-activityContent__media,
m-groups--profile m-activity__content .m-activityContent__media--video.m-activityContent__media {
display: flex;
}

m-groups--profile m-activity__content .m-activityContent__media--image.m-activityContent__media a,
m-groups--profile m-activity__content .m-activityContent__media--video.m-activityContent__media m-videoplayer--scrollaware {
margin: auto;
}

m-groups--profile m-activity__content m-videoplayer--scrollaware {
height: revert !important;
width: revert !important;
min-height: 500px;
max-height: 750px;
}

m-groups--profile m-activity__content .plyr video {
max-height: 650px;
}
`;