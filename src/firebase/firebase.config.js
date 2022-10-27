// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC8j-LX5puDdf-pBBbtXIWwcO2ce6VtPrM",
    authDomain: "edu-planner-website.firebaseapp.com",
    projectId: "edu-planner-website",
    storageBucket: "edu-planner-website.appspot.com",
    messagingSenderId: "475840929535",
    appId: "1:475840929535:web:e3d2c778284f624225b6ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;