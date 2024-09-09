// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmoqW0qMBDJFaUmVnBwQBNrVgB4ql1WKQ",
  authDomain: "pathai-9df08.firebaseapp.com",
  projectId: "pathai-9df08",
  storageBucket: "pathai-9df08.appspot.com",
  messagingSenderId: "265051749294",
  appId: "1:265051749294:web:66545fd3843884bc1da63f",
  measurementId: "G-TRN9LRBNGL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);