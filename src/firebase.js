/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1dvuBKzmQ9rELpvZaQDgf3RnNZvl5FPM",
    authDomain: "todo-app-9e586.firebaseapp.com",
    projectId: "todo-app-9e586",
    storageBucket: "todo-app-9e586.firebasestorage.app",
    messagingSenderId: "412985911859",
    appId: "1:412985911859:web:c8356f2c9131283ff75146"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);