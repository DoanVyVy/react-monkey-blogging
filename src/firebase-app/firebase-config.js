import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgpOgYAzF6Kmy74k2T9qSNh6ey6NY4xxc",
  authDomain: "monkey-blogging-e7ee4.firebaseapp.com",
  projectId: "monkey-blogging-e7ee4",
  storageBucket: "monkey-blogging-e7ee4.appspot.com",
  messagingSenderId: "1042858406424",
  appId: "1:1042858406424:web:25c58e4d0a72188e39096d",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
