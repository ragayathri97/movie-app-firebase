// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log(import.meta.env.VITE_FIREBASE_APIKEY)
const firebaseConfig = {
  apiKey: "AIzaSyCZIuUs5pcMDKtNev33X5eqlpA2LLlI17E",
  authDomain: "react-redux-social-media-b9485.firebaseapp.com",
  projectId: "react-redux-social-media-b9485",
  storageBucket: "react-redux-social-media-b9485.firebasestorage.app",
  messagingSenderId: "385888121461",
  appId: "1:385888121461:web:6f47bb3a2de4311768be3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;