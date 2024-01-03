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

// Listen for form submit
const form = document.getElementById('my-form');

form.addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    console.log('Form submitted!'); 
  e.preventDefault();
  // Get form values
  const email = getInputVal('emailInput');
  console.log(email)
  const name = getInputVal('nameInput');
  console.log(name)
  const message = getInputVal('messageInput');
  console.log(message)

  // Save message
  saveMessage(email, name, message);

  // Clear form
  form.reset();
}


// Function to get form value
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to Firebase
function saveMessage(email, name, message) {
  addDoc(collection(db, 'ContactFormData'), {
    email: email,
    name: name,
    message: message,
  })
  .then(function (docRef) {
    console.log('Document written with ID: ', docRef.id);
  })
  .catch(function (error) {
    console.error('Error adding document: ', error);
  });
}
