import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_QprSUY-8LCXPExNHXn4xV9PJouSmThc",
  authDomain: "donation-center-9576e.firebaseapp.com",
  projectId: "donation-center-9576e",
  storageBucket: "donation-center-9576e.firebasestorage.app",
  messagingSenderId: "350514743029",
  appId: "1:350514743029:web:beed9623127544a80167bc",
  measurementId: "G-XLXQJ9L0VF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { db };
