// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyABchnCvJT61sODI06AO_r-dYQvbGdUIBo",
  authDomain: "login-1b2a8.firebaseapp.com",
  projectId: "login-1b2a8",
  storageBucket: "login-1b2a8.firebasestorage.app",
  messagingSenderId: "965266318098",
  appId: "1:965266318098:web:e880463ff7c8c0a398c9cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);