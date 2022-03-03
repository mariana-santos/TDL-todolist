// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";

import { 
    getAuth,
    signInWithEmailAndPassword
  } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js"
          
const firebaseConfig = {
  apiKey: "AIzaSyAGEcYCl3xghnKYTGlT8Sl_lLTYnERniig",
  authDomain: "tdl-todolist.firebaseapp.com",
  projectId: "tdl-todolist",
  storageBucket: "tdl-todolist.appspot.com",
  messagingSenderId: "35565470940",
  appId: "1:35565470940:web:a53de3a22cb15bc4c96019"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const signIn = document.getElementById('btnSignIn')

signIn.addEventListener('click', ()=> {

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then(user => {
      console.log(user);
      location = 'index.html'
    })
    .catch(error => {
      throw (error)
    })
})