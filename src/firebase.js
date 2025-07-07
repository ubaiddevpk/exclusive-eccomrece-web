// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7NRvw0LXeew7pPkmL2QpDOjQqyGdAwhs",
  authDomain: "exclusive-e-commerce-8f555.firebaseapp.com",
  projectId: "exclusive-e-commerce-8f555",
  storageBucket: "exclusive-e-commerce-8f555.firebasestorage.app",
  messagingSenderId: "527040340614",
  appId: "1:527040340614:web:e662f6dcc928de187a2707",
  measurementId: "G-DZN7RP614D"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
