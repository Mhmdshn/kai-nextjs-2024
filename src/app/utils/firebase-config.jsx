// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb_qSmf1gTi-pJVqw7_bvKa9C9Irz0B6M",
  authDomain: "kaiv12.firebaseapp.com",
  projectId: "kaiv12",
  storageBucket: "kaiv12.appspot.com",
  messagingSenderId: "636524072030",
  appId: "1:636524072030:web:3dd811263468ae3ad978cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);