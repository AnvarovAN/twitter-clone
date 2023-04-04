import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp(
 {
  apiKey: "AIzaSyCrPni0DFjOSYtwMRn9DDZMvmkNUVwPRa0",
  authDomain: "twitter-auth-5fd1d.firebaseapp.com",
  projectId: "twitter-auth-5fd1d",
  storageBucket: "twitter-auth-5fd1d.appspot.com",
  messagingSenderId: "668792095414",
  appId: "1:668792095414:web:a9762d248e23c62a6cdc17",
  measurementId: "G-W9HL687ZVF"
  }
  );

const auth = app.auth();
export { auth };
export default app;