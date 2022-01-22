// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_DOMAIN,
  projectId: "exodus-10036",
  storageBucket: "exodus-10036.appspot.com",
  messagingSenderId: "121332884466",
  appId: "1:121332884466:web:cc6321c49b5aa6c966416b",
  measurementId: "G-XTFVHFMZHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const sotrage = getStorage(app);