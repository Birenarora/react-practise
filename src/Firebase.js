import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBk46157R8Jo7Yx5TDVPuC9WPEVkrCKEsc",
  authDomain: "taskpro-coding-challenge-default-rtdb.firebaseapp.com",
  databaseURL: "https://taskpro-coding-challenge-default-rtdb.firebaseio.com",
  projectId: "taskpro-coding-challenge-default-rtdb",
  storageBucket: "taskpro-coding-challenge-default-rtdb.appspot.com",
  messagingSenderId: "719008250944",
  appId: "1:719008250944:web:0b01d9eaccc03faf3073a5",
  measurementId: "G-1YQCSKKVG9"
};
firebase.initializeApp(firebaseConfig);
export default firebase;