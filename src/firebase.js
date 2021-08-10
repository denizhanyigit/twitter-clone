import firebase from 'firebase';
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC-qkF7OO__k2UemW28hcQA2A2cvY3xMPo",
  authDomain: "twitter-clone-e5ae4.firebaseapp.com",
  projectId: "twitter-clone-e5ae4",
  storageBucket: "twitter-clone-e5ae4.appspot.com",
  messagingSenderId: "310331166091",
  appId: "1:310331166091:web:31675e9e2cb7481681b38e",
  measurementId: "G-T8J5Z9RP3E"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export default db;