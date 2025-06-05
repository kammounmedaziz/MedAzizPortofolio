import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

// Your Firebase config object (replace with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyDCDc69u8zcOn324ckW4HziZb3x5WK7QRw",
  authDomain: "portfolio-b0e3c.firebaseapp.com",
  projectId: "portfolio-b0e3c",
  storageBucket: "portfolio-b0e3c.firebasestorage.app",
  messagingSenderId: "764557256925",
  appId: "1:764557256925:web:c3b979e2455521b9631334",
  measurementId: "G-BC17Z0PPW1"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db, collection };