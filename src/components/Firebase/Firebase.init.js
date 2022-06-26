// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYr0OV5lW0mfMMkLd_T7DoXn80Y_R0pCk",

  authDomain: "figma-blog-06-26-22.firebaseapp.com",

  projectId: "figma-blog-06-26-22",

  storageBucket: "figma-blog-06-26-22.appspot.com",

  messagingSenderId: "200913573808",

  appId: "1:200913573808:web:ab3bac0cd52faafde8e875",

  measurementId: "G-NC6WTMFVB7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;
