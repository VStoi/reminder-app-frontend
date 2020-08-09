import * as firebase from "firebase/app";
import "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyBqFomJyb5vd7kpaTuMyqI59yoJpJwWXmI",
    authDomain: "reminder-app-e7336.firebaseapp.com",
    databaseURL: "https://reminder-app-e7336.firebaseio.com",
    projectId: "reminder-app-e7336",
    storageBucket: "reminder-app-e7336.appspot.com",
    messagingSenderId: "100761613138",
    appId: "1:100761613138:web:48d02f01a61f8f1b4f408b"
};

const initializedFirebaseApp = firebase.initializeApp(firebaseConfig);
const messaging = initializedFirebaseApp.messaging();

export { messaging };