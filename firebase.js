import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA9zP-qkceK1cKBm0IxH4LVnBqKUHtSWZU",
    authDomain: "jeronimonetwork-96252.firebaseapp.com",
    projectId: "jeronimonetwork-96252",
    storageBucket: "jeronimonetwork-96252.appspot.com",
    messagingSenderId: "699207830191",
    appId: "1:699207830191:web:4019e357ca3e1f2eace25a",
    measurementId: "G-F2RJPX7N7C"
  });

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export{db,auth,storage,functions};