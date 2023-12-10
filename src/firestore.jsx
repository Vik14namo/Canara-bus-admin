// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
//   apiKey: "AIzaSyAg6ac6kLemnRpfk047EUfsTmy8365JWJg",
//   authDomain: "canara-bus.firebaseapp.com",
//   projectId: "canara-bus",
//   storageBucket: "canara-bus.appspot.com",
//   messagingSenderId: "723862629327",
//   appId: "1:723862629327:web:432689ed1f0696b5a100ba",
//   measurementId: "G-J6KE4X66LC"
apiKey: process.env.REACT_APP_API_KEY,
  authDomain:process.env.REACT_APP_AUTH_DOMAIN ,
  projectId:process.env.REACT_APP_PROJECT_ID ,
  storageBucket:process.env.REACT_APP_STORAGE_BUCKET ,
  messagingSenderId:process.env.REACT_APP_MESSAGEING_SENDER_ID ,
  appId:process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);