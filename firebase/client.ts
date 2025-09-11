// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGSyEMB-kjmEFkoS4FZSnFZMi2jouUZm0",
  authDomain: "prepai-c98ed.firebaseapp.com",
  projectId: "prepai-c98ed",
  storageBucket: "prepai-c98ed.firebasestorage.app",
  messagingSenderId: "747488953987",
  appId: "1:747488953987:web:063c4b6b7f7801062e3db6",
  measurementId: "G-BJ1BYXC0NR"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);