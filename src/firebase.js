// Software built by  Adeweb Developer Africa
// portfolio website: https://adeweb-developer.vercel.app
// whatsApp Message: https://wa.me/23407043455416
// I am open for your software development gig, thank you

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAP5Lalf_1DA1EJsgk-78PC2ymJPOuOfRE",
  authDomain: "ikordudating.firebaseapp.com",
  projectId: "ikordudating",
  storageBucket: "ikordudating.firebasestorage.app",
  messagingSenderId: "670437901831",
  appId: "1:670437901831:web:6b7a4d9b6517e558560ca2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

const googleProvider = new GoogleAuthProvider();

export { auth, db, storage, googleProvider };
