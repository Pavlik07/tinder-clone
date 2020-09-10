import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCNfF_XfApj-0vkH2tFwQpz6UCg5g2YKq8",
    authDomain: "tinder-clone-da6fc.firebaseapp.com",
    databaseURL: "https://tinder-clone-da6fc.firebaseio.com",
    projectId: "tinder-clone-da6fc",
    storageBucket: "tinder-clone-da6fc.appspot.com",
    messagingSenderId: "510184703358",
    appId: "1:510184703358:web:6c6081026175a416f55f2f",
    measurementId: "G-XYFC37E6G6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;