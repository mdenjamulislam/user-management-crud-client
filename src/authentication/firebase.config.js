// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmfHiKwALNx2qC8Dd7SboNbEvZxy5JZTM",
  authDomain: "user-management-crud-16066.firebaseapp.com",
  projectId: "user-management-crud-16066",
  storageBucket: "user-management-crud-16066.appspot.com",
  messagingSenderId: "767811355048",
  appId: "1:767811355048:web:02179394c7201542ea9d9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;