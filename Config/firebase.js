import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore'


 let firebaseConfig = {
    apiKey: "AIzaSyBlwgTCZ4U42LED4hKbn_XM0o5gyA9HZjc",
    authDomain: "law32-a1d95.firebaseapp.com",
    projectId: "law32-a1d95",
    storageBucket: "law32-a1d95.appspot.com",
    messagingSenderId: "225201421476",
    appId: "1:225201421476:web:0ba93175782d0296c0fa31"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();

  export const firestore= firebase.firestore();