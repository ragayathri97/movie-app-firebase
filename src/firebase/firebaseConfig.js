import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZIuUs5pcMDKtNev33X5eqlpA2LLlI17E",
  authDomain: "react-redux-social-media-b9485.firebaseapp.com",
  projectId: "react-redux-social-media-b9485",
  storageBucket: "react-redux-social-media-b9485.firebasestorage.app",
  messagingSenderId: "385888121461",
  appId: "1:385888121461:web:6f47bb3a2de4311768be3c"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;