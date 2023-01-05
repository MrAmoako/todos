// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY2Z3YeWgyTAubT_agkex0e9THccgGja8",
  authDomain: "todos-e4f33.firebaseapp.com",
  projectId: "todos-e4f33",
  storageBucket: "todos-e4f33.appspot.com",
  messagingSenderId: "739823498900",
  appId: "1:739823498900:web:0e186236420696852f2681",
  measurementId: "G-6CCTKKX6X0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);