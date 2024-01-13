import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNqrxYRUCmrpxnEtV12_mruW92bOpkkBU",
  authDomain: "house-marketplace-app-6dd1e.firebaseapp.com",
  projectId: "house-marketplace-app-6dd1e",
  storageBucket: "house-marketplace-app-6dd1e.appspot.com",
  messagingSenderId: "396599401572",
  appId: "1:396599401572:web:1bb590e76a387e62171371"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()