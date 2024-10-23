let push = require("web-push");

// let vapidKeys = push.generateVAPIDKeys();
// console.log('vapidKeys', vapidKeys);

let vapidKeys = {
  publickKey: "BNH47KprCpAVsmy4rMH7-CIk-zMMtSaxOJG_dzYZnY9lsoym3AHlaHfCw7lhLaZ_5hJsx3W7buKU4_5mS6A0-2k",
  privateKey: "yqCwoTwu5QG-7SrovnPm2p10wymXOqj1ZGw6mlIqUF0",
};

push.setVapidDetails("mailto:test@code.co.uk", vapidKeys.publickKey, vapidKeys.privateKey);

// the subscriptions of users that we want to recieve the notification, saved in a db
let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/dNHOGui8TmI:APA91bFcvSUD54GmVsFzwhLxmgf2SHxT9pj-IMZC3CIyhosLGkdI2mIJ1xNcLDyYQSk_K9kAkzQiVNwWoqdKnWFbv_DZU9nU52uawtQK9aBcAv6OttJnUXfGqqFGBneJtc1_xsWvGJDP",
  expirationTime: null,
  keys: {
    p256dh: "BHj4g7d7iSsIaE1sIfqWHQQOMs0Qata6YyMXpFjc6FwiiG5k2MhmoXl-KC1JiJ2ac0cmhaBsRtCKI3xB7mjZztU", // public key - used to ensure that only the intended recipient can decrypt the message
    auth: "Gg1phCI_WlFc4H-yXQDFtg", // authentication secret key
  },
};

push.sendNotification(sub, "Test message!");
