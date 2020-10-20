import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyA8BdLWrn3ZABbPXFBpseLzESepmOoEDOU",
    authDomain: "slack-clone-app-53e96.firebaseapp.com",
    databaseURL: "https://slack-clone-app-53e96.firebaseio.com",
    projectId: "slack-clone-app-53e96",
    storageBucket: "slack-clone-app-53e96.appspot.com",
    messagingSenderId: "756149577674",
    appId: "1:756149577674:web:a027327f602bdeb82a9133",
    measurementId: "G-2YDMK5B9V4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {auth,provider}
export default db;