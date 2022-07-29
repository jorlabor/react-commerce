import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFxSVb-E-2QLQh46FylPLDErlUq5nMTEA",
    authDomain: "profiling-2a4cf.firebaseapp.com",
    projectId: "profiling-2a4cf",
    storageBucket: "profiling-2a4cf.appspot.com",
    messagingSenderId: "471641079359",
    appId: "1:471641079359:web:355b3f915a910f0ddb828a"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)