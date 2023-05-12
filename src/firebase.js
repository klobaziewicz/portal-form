// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC19yyfMBhDMF2c_7nb2wcNw1OIb4BlXm4",
  authDomain: "form-app-8377b.firebaseapp.com",
  projectId: "form-app-8377b",
  storageBucket: "form-app-8377b.appspot.com",
  messagingSenderId: "1077994133466",
  appId: "1:1077994133466:web:0b6faac356206993e412e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;