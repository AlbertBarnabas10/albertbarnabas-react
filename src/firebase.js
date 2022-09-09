import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcKa3IdW4DUfefqERXwXgIqlNI-Y-F8TA",
  authDomain: "react-portfolio-fe197.firebaseapp.com",
  projectId: "react-portfolio-fe197",
  storageBucket: "react-portfolio-fe197.appspot.com",
  messagingSenderId: "569833401039",
  appId: "1:569833401039:web:708aa017c0fdf6ef5365ba",
  measurementId: "G-PL3T5SMFMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);