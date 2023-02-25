export const gridviewActiveCSS = `
m-tophighlights,
m-feednotice__outlet {
  display: none;
}

m-groups--profile .minds-list > div:nth-child(1),
m-newsfeed--subscribed .minds-list,
m-channel__feed .m-channelFeedList__entities,
m-groupsmemberships div.ng-star-inserted {
  display: grid;
  grid-template-columns: 33% 33% 33%;
}

m-groupsmemberships div.ng-star-inserted {
  column-gap: 15px;
}

m-groups--profile m-activity.m-border:nth-child(1) > m-activity:nth-child(1) > div:nth-child(1) > div:nth-child(1) > m-hovercard:nth-child(1) > div:nth-child(1),
m-newsfeed--subscribed m-activity.m-border:nth-child(1) > m-activity:nth-child(1) > div:nth-child(1) > div:nth-child(1) > m-hovercard:nth-child(1) > div:nth-child(1),
m-channel__feed m-activity.m-border:nth-child(1) > m-activity:nth-child(1) > div:nth-child(1) > div:nth-child(1) > m-hovercard:nth-child(1) > div:nth-child(1) {
  display: none;
}

m-groups--profile m-group-profile__feed.ng-star-inserted,
m-newsfeed--subscribed m-group-profile__feed.ng-star-inserted,
m-channel__feed m-group-profile__feed.ng-star-inserted {
  width: 100%;
}

m-groups--profile .m-group__feeds,
m-newsfeed--subscribed .m-group__feeds,
m-channel__feed .m-group__feeds {
  max-width: revert;
}

m-groups--profile .m-mindsList__tools,
m-newsfeed--subscribed .m-mindsList__tools,
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
m-newsfeed--subscribed .m-activity__flagRow,
m-channel__feed .m-activity__flagRow {
  padding-bottom: revert !important;
  height: 2px;
  background-color: purple;
}

m-newsfeed--subscribed .m-activity__flagRow m-activity__flag,
m-channel__feed .m-activity__flagRow m-activity__flag {
  display: none;
}

/* Content Element */
m-groups--profile m-activity .m-activityOwnerBlock__groupName.m-activityOwnerBlock__truncate.ng-star-inserted,
m-newsfeed--subscribed m-activity .m-activityOwnerBlock__groupName.m-activityOwnerBlock__truncate.ng-star-inserted,
m-channel__feed m-activity .m-activityOwnerBlock__groupName.m-activityOwnerBlock__truncate.ng-star-inserted {
  display: none;
}

m-groups--profile m-activity .m-activityContentText__innerWrapper,
m-newsfeed--subscribed m-activity .m-activityContentText__innerWrapper,
m-channel__feed m-activity .m-activityContentText__innerWrapper {
  height: 2px;
  background-color: aqua;
  padding: 0 !important;
}

m-groups--profile m-activity .m-activityContentText__body,
m-groups--profile m-activity .m-activityContentText__title,
m-newsfeed--subscribed m-activity .m-activityContentText__body,
m-newsfeed--subscribed m-activity .m-activityContentText__title,
m-channel__feed m-activity .m-activityContentText__body,
m-channel__feed m-activity .m-activityContentText__title {
  display: none;
}

m-groups--profile m-activity .m-activityContent__media--image img,
m-newsfeed--subscribed m-activity .m-activityContent__media--image img,
m-channel__feed m-activity .m-activityContent__media--image img {
  width: 100% !important;
  height: 650px !important;
  max-height: 650px !important;
}

m-groups--profile m-activity m-videoPlayer, m-videoPlayer--scrollaware,
m-newsfeed--subscribed m-activity m-videoPlayer, m-videoPlayer--scrollaware,
m-channel__feed m-activity m-videoPlayer, m-videoPlayer--scrollaware {
  width: 100% !important;
  height: 650px !important;
  max-height: 650px !important;
}

m-groups--profile m-activity minds-button-thumbs-down a,
m-groups--profile m-activity minds-button-comment a,
m-groups--profile m-activity m-supermind__button m-button,
m-newsfeed--subscribed m-activity minds-button-thumbs-down a,
m-newsfeed--subscribed m-activity minds-button-comment a,
m-newsfeed--subscribed m-activity m-supermind__button m-button,
m-channel__feed m-activity minds-button-thumbs-down a,
m-channel__feed m-activity minds-button-comment a,
m-channel__feed m-activity m-supermind__button m-button {
  display: none;
}

m-groups--profile m-activity minds-button-thumbs-down, 
m-groups--profile m-activity minds-button-comment, 
m-groups--profile m-activity m-supermind__button,
m-newsfeed--subscribed m-activity minds-button-thumbs-down, 
m-newsfeed--subscribed m-activity minds-button-comment, 
m-newsfeed--subscribed m-activity m-supermind__button,
m-channel__feed m-activity minds-button-thumbs-down, 
m-channel__feed m-activity minds-button-comment, 
m-channel__feed m-activity m-supermind__button {
  max-width: 0px;
}

m-groups--profile m-activity .m-activityTop__avatarColumn.m-activity__avatar.ng-star-inserted,
m-newsfeed--subscribed m-activity .m-activityTop__avatarColumn.m-activity__avatar.ng-star-inserted,
m-channel__feed m-activity .m-activityTop__avatarColumn.m-activity__avatar.ng-star-inserted {
  display: none;
}

m-groups--profile m-activity m-comments__entityoutletv2,
m-newsfeed--subscribed m-activity m-comments__entityoutletv2,
m-channel__feed m-activity m-comments__entityoutletv2 {
  display: none !important;
}

m-groups--profile m-activity m-activitycontent__multiimage,
m-newsfeed--subscribed m-activity m-activitycontent__multiimage,
m-channel__feed m-activity m-activitycontent__multiimage {
  width: 367px;
}

m-groups--profile m-activity m-activitycontent__multiimage > div,
m-newsfeed--subscribed m-activity m-activitycontent__multiimage > div,
m-channel__feed m-activity m-activitycontent__multiimage > div {
  padding-bottom: 650px !important;
}

m-groups--profile m-activity m-activitycontent__multiimage > div:nth-child(1),
m-newsfeed--subscribed m-activity m-activitycontent__multiimage > div:nth-child(1),
m-channel__feed m-activity m-activitycontent__multiimage > div:nth-child(1) {
  padding-bottom: 650px;
}

/* Embeds */
m-groups--profile m-activity minds-rich-embed a.thumbnail,
m-newsfeed--subscribed m-activity minds-rich-embed a.thumbnail,
m-channel__feed m-activity minds-rich-embed a.thumbnail {
  height: 650px;
}

m-groups--profile m-activity minds-rich-embed a.thumbnail img,
m-newsfeed--subscribed m-activity minds-rich-embed a.thumbnail img,
m-channel__feed m-activity minds-rich-embed a.thumbnail img {
    width: 100% !important;
    height: 100% !important;
    max-height: revert !important;
  }
}

m-groups--profile m-activity minds-rich-embed .m-activityContent__media--richEmbed .meta,
m-groups--profile m-activity minds-rich-embed .m-rich-embed-src a.meta,
m-groups--profile m-activity minds-rich-embed.m-richEmbed--activity--row .m-activityContent__media--richEmbed .meta,
m-groups--profile m-activity minds-rich-embed.m-richEmbed--activity--row .m-rich-embed-src a.meta,
m-newsfeed--subscribed m-activity minds-rich-embed .m-activityContent__media--richEmbed .meta,
m-newsfeed--subscribed m-activity minds-rich-embed .m-rich-embed-src a.meta,
m-newsfeed--subscribed m-activity minds-rich-embed.m-richEmbed--activity--row .m-activityContent__media--richEmbed .meta,
m-newsfeed--subscribed m-activity minds-rich-embed.m-richEmbed--activity--row .m-rich-embed-src a.meta,
m-channel__feed m-activity minds-rich-embed .m-activityContent__media--richEmbed .meta,
m-channel__feed m-activity minds-rich-embed .m-rich-embed-src a.meta,
m-channel__feed m-activity minds-rich-embed.m-richEmbed--activity--row .m-activityContent__media--richEmbed .meta,
m-channel__feed m-activity minds-rich-embed.m-richEmbed--activity--row .m-rich-embed-src a.meta {
  display: none !important;
 }
`;

export const gridviewInactiveCSS = `
m-groups--profile m-activity__content m-activitycontent__multiimage,
m-newsfeed--subscribed m-activity__content m-activitycontent__multiimage,
m-channel__feed m-activity__content m-activitycontent__multiimage {
    min-height: 750px;
    min-width: 750px;
}
`;
