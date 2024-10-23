let push = require("web-push");

// let vapidKeys = push.generateVAPIDKeys();
// console.log('vapidKeys', vapidKeys);

let vapidKeys = {
  publickKey: "BNH47KprCpAVsmy4rMH7-CIk-zMMtSaxOJG_dzYZnY9lsoym3AHlaHfCw7lhLaZ_5hJsx3W7buKU4_5mS6A0-2k",
  privateKey: "yqCwoTwu5QG-7SrovnPm2p10wymXOqj1ZGw6mlIqUF0",
};

push.setVapidDetails("mailto:test@code.co.uk", vapidKeys.publickKey, vapidKeys.privateKey);

// the subscriptions of users that we want to recieve the notification, saved in a db
let sub = {} 
push.sendNotification(sub, "Test message!");
