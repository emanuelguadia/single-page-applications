import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGt7-RuYZcRBtSXIcZU59uus25R9ustj8",
  authDomain: "fir-auth-data-cool.firebaseapp.com",
  projectId: "fir-auth-data-cool",
  storageBucket: "fir-auth-data-cool.appspot.com",
  messagingSenderId: "788177394778",
  appId: "1:788177394778:web:7f6dc6e0e0b89449e28c63",
  measurementId: "G-LYQJ1NH0XW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Compiled with problems:
// ERROR in ./src/components/navbar/Navbar.jsx 10:0-48
// Module not found: Error: You attempted to import ../../../firebase-config which falls outside of the project src/ directory. Relative imports outside of src/ are not supported.
// You can either move it inside src/, or add a symlink to it from project's node_modules/
export  const auth = getAuth();



