// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCx5SBWBrm-vhMtV60jsitiT_lDgNrfLI",
  authDomain: "acheive-it.firebaseapp.com",
  projectId: "acheive-it",
  storageBucket: "acheive-it.appspot.com",
  messagingSenderId: "571098525461",
  appId: "1:571098525461:web:64d7dd490478e80f84431c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize other services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
