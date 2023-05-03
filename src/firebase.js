// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsvJ37jixhSKXwZmExR2eYXuNQsj-0S_I",
  authDomain: "http-32ffe.firebaseapp.com",
  databaseURL: "https://http-32ffe-default-rtdb.firebaseio.com",
  projectId: "http-32ffe",
  storageBucket: "http-32ffe.appspot.com",
  messagingSenderId: "773590197582",
  appId: "1:773590197582:web:160cbd1b3998c6da5daa1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth=getAuth(app);
 export default auth;