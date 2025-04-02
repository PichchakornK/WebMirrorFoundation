import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
// import { getAnalytics } from "firebase/analytics"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_QprSUY-8LCXPExNHXn4xV9PJouSmThc",
  authDomain: "donation-center-9576e.firebaseapp.com",
  projectId: "donation-center-9576e",
  storageBucket: "donation-center-9576e.appspot.com", // ✅ แก้ไขให้ถูกต้อง (ลบ .app ออก)
  messagingSenderId: "350514743029",
  appId: "1:350514743029:web:beed9623127544a80167bc",
  measurementId: "G-XLXQJ9L0VF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); 

const db = getFirestore(app);

export { db };
