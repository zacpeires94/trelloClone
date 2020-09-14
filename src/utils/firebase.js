import * as firebase from "firebase";
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyBXKE3HEDV9ZLYFmv6ppBELdazENXYhITM",
  authDomain: "trello-clone-20b46.firebaseapp.com",
  databaseURL: "https://trello-clone-20b46.firebaseio.com",
  projectId: "trello-clone-20b46",
  storageBucket: "trello-clone-20b46.appspot.com",
  messagingSenderId: "515830582899",
  appId: "1:515830582899:web:a21be54b7d381b3127e406",
});

export const firestore = firebase.firestore();
