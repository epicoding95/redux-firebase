import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBeRQztjQoFwWhW0jwL266MJQEflp1-hYo",
    authDomain: "redux-firebase-589dd.firebaseapp.com",
    databaseURL: "https://redux-firebase-589dd.firebaseio.com",
    projectId: "redux-firebase-589dd",
    storageBucket: "",
    messagingSenderId: "962987473876",
    appId: "1:962987473876:web:6819c3583de08550107441"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;