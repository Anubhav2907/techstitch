import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBbF9WO55rjbaZO2HDf2XXxU51yavFzOl8",
  authDomain: "techstitch-54437.firebaseapp.com",
  projectId: "techstitch-54437",
  storageBucket: "techstitch-54437.appspot.com",
  messagingSenderId: "368108199220",
  appId: "1:368108199220:web:b7fd95f347ce346b811961",
  measurementId: "G-4DEV76HS4D",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;
