
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCAImanWzMQFZ4gMYqfOjY9e_fzEUg0dAw",
  authDomain: "react-netflix-clone-ed450.firebaseapp.com",
  projectId: "react-netflix-clone-ed450",
  storageBucket: "react-netflix-clone-ed450.appspot.com",
  messagingSenderId: "259359341745",
  appId: "1:259359341745:web:f65de4e36d97efdb2af690",
  measurementId: "G-1T1F7FVEW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);