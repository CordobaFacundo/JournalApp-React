// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5MSiE-hkO99xVQMxgkBNpOOjoQ2m-nNs",
  authDomain: "react-cursos-48540.firebaseapp.com",
  projectId: "react-cursos-48540",
  storageBucket: "react-cursos-48540.firebasestorage.app",
  messagingSenderId: "369998661236",
  appId: "1:369998661236:web:73d39a36ecaa039ec83321"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );
