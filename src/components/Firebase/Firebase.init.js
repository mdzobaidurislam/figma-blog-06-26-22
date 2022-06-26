// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATEZ6G8q9fpJwxWgUEQ7LQfaQrepVQ9nQ",
  authDomain: "gym-trainer-35cee.firebaseapp.com",
  projectId: "gym-trainer-35cee",
  storageBucket: "gym-trainer-35cee.appspot.com",
  messagingSenderId: "943540174636",
  appId: "1:943540174636:web:336d8150e4713753967689",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
