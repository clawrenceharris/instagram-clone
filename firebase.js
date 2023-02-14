import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBocusvELtjTKI2Uohd7OWSuAWoip74JtA",
    authDomain: "instagram-clone-81563.firebaseapp.com",
    projectId: "instagram-clone-81563",
    storageBucket: "instagram-clone-81563.appspot.com",
    messagingSenderId: "476129702402",
    appId: "1:476129702402:web:49bbd9932d16e9009b6d1b"
};

let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
}
else {
    app = firebase.app()
}
const db = app.firestore()
const auth = firebase.auth()
export { db, auth }