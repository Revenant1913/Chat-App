// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUNJRxbq1zlBV2xqlY_zdAxHpwAvRo5lc",
  authDomain: "chat-app-2-d668b.firebaseapp.com",
  projectId: "chat-app-2-d668b",
  storageBucket: "chat-app-2-d668b.appspot.com",
  messagingSenderId: "256393079061",
  appId: "1:256393079061:web:3a1a090e8aa62b5e21a11c",
  measurementId: "G-2NQ6HYTV43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const db = getFirestore(app);