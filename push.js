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
    "https://fcm.googleapis.com/fcm/send/f_LpfP26yb8:APA91bHzzJuQdm-Ytx0SjzxEqtT3mhVIamvaKl4TSjsP54UWKuqKi9Wl0aPh0KnVfzR0zFG8fGVcx1QMJYqKUDbi-9LwVMdMchV7dgo2v3HmR0X7q5SH2-QrQ6Yg5hjE5BO7IkLhwnvS",
  expirationTime: null,
  keys: {
    p256dh: "BPjh1lUsYHh7y7l5fmcFD8nOvDBN9K9o9x3gm7bmqGcDWuxZUd6fvZx-8S9FnCBYV1eo8qqkQHOELlbMF5jLndM",
    auth: "cKjKI9vQ5HY51W5QTSMRmw",
  },
};

push.sendNotification(sub, "Test message!");
