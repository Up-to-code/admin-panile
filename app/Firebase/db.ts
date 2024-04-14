import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.API_KAY,
    authDomain: "my-website-310.firebaseapp.com",
    databaseURL: "https://my-website-310-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "my-website-310",
    storageBucket: "my-website-310.appspot.com",
    messagingSenderId: "866985940487",
    appId: "1:866985940487:web:ae53a958dce0e23686bca2",
    measurementId: "G-35SC96PTDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export  const storage = getStorage(app);