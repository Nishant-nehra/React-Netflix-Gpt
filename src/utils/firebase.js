import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDc7L8UDC7vLLV6X4FhxZmyZoXKwf481Sk",
    authDomain: "netflix-gpt-7ba90.firebaseapp.com",
    projectId: "netflix-gpt-7ba90",
    storageBucket: "netflix-gpt-7ba90.firebasestorage.app",
    messagingSenderId: "730252832253",
    appId: "1:730252832253:web:b03c9f146c177f543f7d94",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
