import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB87NxzIkyocfDqzU6u2jQRpAOMTzLBUss",
  // apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "connectzy.firebaseapp.com",
  projectId: "connectzy",
  storageBucket: "connectzy.appspot.com",
  messagingSenderId: "628137231921",
  appId: "1:628137231921:web:83f428bf0ff9620b7e7710",
  measurementId: "G-TE1RZ3VC5B"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth()
export const db=getFirestore()
export const storage=getStorage()