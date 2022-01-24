// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE3QEKtnLHjq9lDt56cwkm11CB4RC-ES0",
  authDomain: "house-marketplace-app-857be.firebaseapp.com",
  projectId: "house-marketplace-app-857be",
  storageBucket: "house-marketplace-app-857be.appspot.com",
  messagingSenderId: "478926214901",
  appId: "1:478926214901:web:731ecbd0e804cb15c997bc"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()