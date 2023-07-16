

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBk5_wcc50RUZWce12tYuCAbdBnuyN1QEg",
  authDomain: "challenge-595ef.firebaseapp.com",
  projectId: "challenge-595ef",
  storageBucket: "challenge-595ef.appspot.com",
  messagingSenderId: "1098473371773",
  appId: "1:1098473371773:web:ead98294addd20bf449914",
  measurementId: "G-6F638BK35M",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
