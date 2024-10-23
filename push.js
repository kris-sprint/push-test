let push = require("web-push");

// let vapidKeys = push.generateVAPIDKeys();
// console.log('vapidKeys', vapidKeys);

let vapidKeys = {
  publickKey: "BNH47KprCpAVsmy4rMH7-CIk-zMMtSaxOJG_dzYZnY9lsoym3AHlaHfCw7lhLaZ_5hJsx3W7buKU4_5mS6A0-2k",
  privateKey: "yqCwoTwu5QG-7SrovnPm2p10wymXOqj1ZGw6mlIqUF0",
};

push.setVapidDetails("mailto:test@code.co.uk", vapidKeys.publickKey, vapidKeys.privateKey);

// the subscriptions (vapidDetails in the types) of users that we want to recieve the notification, saved in a db
let windowsSub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/ckLo8LaI9MY:APA91bH_TITVreaVgDjtWLw3B8FMyCnqzGugNiwKHWkk5hzRnzWKEnhQfD0wUWKruWMSee-HxrZBNwqorQvpKfISG6_xr_n9BdaCZ_tXT0p1aU6OPU5n9yqYfRSxRtbyVvvB1-NavH6t",
  expirationTime: null,
  keys: {
    p256dh: "BGU-EzkfVikMTybVgjlzIYqj457IzB8Up4vOTGo_UcI1aHZgU5QvycjR2OonUE7hYcnbt_LRw7pX85-o6Oi4C4s",
    auth: "ynHaSHuifNPhsvH6IcqG2g",
  },
};
let iosSub = {
  endpoint:
    "https://web.push.apple.com/QFs0ENTS4-j1uss4EYQdmusUvsT9aurI0PiIcdLXKDfne_5zjGufWn1mDCoMP5kxkudTvfUhidVQYvEczGfDCq2mUrDM5_-GW8oz-zCPqdKsb8TTK83_g-McpPJAPeh2a7MwYwx4gQBIbqbHUN9FwJCm49CxhgfMaHGVuu48oF4",
  keys: {
    p256dh: "BGyNJi3TUCh1TFfrUQRJ2NlfzAXohWY8wQld5LeEFk43k9NYt4IikRQ47xgd-WdIKPFzUNfhdVuWWCv0vvDxpGg",
    auth: "xxjxhx9R_3gJyP7BZg_hQA",
  },
};

let androidSub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/dNHOGui8TmI:APA91bFcvSUD54GmVsFzwhLxmgf2SHxT9pj-IMZC3CIyhosLGkdI2mIJ1xNcLDyYQSk_K9kAkzQiVNwWoqdKnWFbv_DZU9nU52uawtQK9aBcAv6OttJnUXfGqqFGBneJtc1_xsWvGJDP",
  expirationTime: null,
  keys: {
    p256dh: "BHj4g7d7iSsIaE1sIfqWHQQOMs0Qata6YyMXpFjc6FwiiG5k2MhmoXl-KC1JiJ2ac0cmhaBsRtCKI3xB7mjZztU",
    auth: "Gg1phCI_WlFc4H-yXQDFtg",
  },
};

// Payload can be anything
let payload = JSON.stringify({
  title: "Another title test!",
  body: "different body",
  icon: "images/example.png",
  vibrate: [100, 50, 100],
  data: {
    dateOfArrival: Date.now(),
    primaryKey: "2",
  },
  actions: [
    { action: "explore", title: "Open", icon: "images/checkmark.png" },
    { action: "close", title: "Close", icon: "images/xmark.png" },
  ],
});

push
  .sendNotification(windowsSub, payload)
  .then(() => console.log("Notification sent successfully"))
  .catch((err) => console.error("Error sending notification", err));
