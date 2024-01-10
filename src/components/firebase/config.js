import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaZlPH5jGpMGOIkvClx0TklGy8_Jglu3o",
    authDomain: "lkw-contact.firebaseapp.com",
    projectId: "lkw-contact",
    storageBucket: "lkw-contact.appspot.com",
    messagingSenderId: "895378890504",
    appId: "1:895378890504:web:230e8e00650e2830c156bd",
    measurementId: "G-XKMCKH0WH9"
  };
  console.log('Config.js is executed');
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
