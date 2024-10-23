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
    "https://fcm.googleapis.com/fcm/send/fzR9qvwJ4HY:APA91bGEHVlXmcejF0pZqH5VDg6mi_lot4U8bf64Ho4oY-9fWqW3cJfgvdwW82rvREMECtu4dILXKae6aIedPtT7smIrgmY5r3cPC-5k9vUaFakn61sbIIjUMtz_PGGKWZZS-wZ-LXoR",
  expirationTime: null,
  keys: {
    p256dh: "BHcqMc2jExhor3Ru4TpKr901Z7vei_t2yrTQO9tI9qPUMHZsEk0kdleEner3_m7XM-fp6ALgLqM1fzRnEkzmm9c",
    auth: "q4ILycan0w6ZHAaLt2IHzA",
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
    { action: "explore", title: "Explore this new world", icon: "images/checkmark.png" },
    { action: "close", title: "Close", icon: "images/xmark.png" },
  ],
});

push
  .sendNotification(iosSub, payload)
  .then(() => console.log("Notification sent successfully"))
  .catch((err) => console.error("Error sending notification", err));
