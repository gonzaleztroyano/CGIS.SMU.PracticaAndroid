// Import Firebase modules
import { initializeApp } from "./firebase-app.js";
// Required for side-effects
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
} from  "./firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgUzr0U504YAGLbx8KQmWWzhq79FZMtYI",
    authDomain: "pablo-glez-cgis-smu.firebaseapp.com",
    projectId: "pablo-glez-cgis-smu",
    storageBucket: "pablo-glez-cgis-smu.firebasestorage.app",
    messagingSenderId: "515931795369",
    appId: "1:515931795369:web:17ba11eb3dd2753adc5eb8"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
const db = getFirestore(app);

console.log(db);  