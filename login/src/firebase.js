// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3Melul8aw8ZlxQEZ4L5WsRkhaUj_4taA",
  authDomain: "react-auth-d3ab8.firebaseapp.com",
  projectId: "react-auth-d3ab8",
  storageBucket: "react-auth-d3ab8.appspot.com",
  messagingSenderId: "499623742560",
  appId: "1:499623742560:web:c58f6866f166ac90a50705"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);