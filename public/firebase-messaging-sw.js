// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseConfig = {
    apiKey: "AIzaSyBqFomJyb5vd7kpaTuMyqI59yoJpJwWXmI",
    authDomain: "reminder-app-e7336.firebaseapp.com",
    databaseURL: "https://reminder-app-e7336.firebaseio.com",
    projectId: "reminder-app-e7336",
    storageBucket: "reminder-app-e7336.appspot.com",
    messagingSenderId: "100761613138",
    appId: "1:100761613138:web:48d02f01a61f8f1b4f408b"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    return self.registration
        .showNotification(
            payload.data.title,
            {
                body: payload.data.body,
                // icon: '/logo192.png',
                data: {
                    url: 'localhost:3000'
                }
            }
        );
});