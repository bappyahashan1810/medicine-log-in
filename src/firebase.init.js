// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUFSVJXmO26pSttXXXAs614MnBNV1zYz4",
    authDomain: "medicine-log-in.firebaseapp.com",
    projectId: "medicine-log-in",
    storageBucket: "medicine-log-in.appspot.com",
    messagingSenderId: "387392554378",
    appId: "1:387392554378:web:3aa4d6283722bf6346b473"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;