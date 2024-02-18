// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-ef39a.firebaseapp.com",
    projectId: "mern-blog-ef39a",
    storageBucket: "mern-blog-ef39a.appspot.com",
    messagingSenderId: "313725806904",
    appId: "1:313725806904:web:0a346bd6cdd14e665079cd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);