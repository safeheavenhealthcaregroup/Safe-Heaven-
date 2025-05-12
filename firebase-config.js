// firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfg46lAHvfo8RGuG1CXzww_k18Po1ubfU",
  authDomain: "safe-heaven-health-care.firebaseapp.com",
  projectId: "safe-heaven-health-care",
  storageBucket: "safe-heaven-health-care.firebasestorage.app",
  messagingSenderId: "103538999646",
  appId: "1:103538999646:web:7df321c4ecc32f1b810fcf",
  measurementId: "G-94J9C5655X"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
