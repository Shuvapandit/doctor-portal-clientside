// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 
    apiKey: "AIzaSyCKRjcuz7tOPjtqgH6A0yr8DHrlXHWq-G0",
    authDomain: "doctors-portal-fe393.firebaseapp.com",
    projectId: "doctors-portal-fe393",
    storageBucket: "doctors-portal-fe393.appspot.com",
    messagingSenderId: "890254844212",
    appId: "1:890254844212:web:16ffcf160681b25ffa0561"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;