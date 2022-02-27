import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";

import { 
    getAuth,
    createUserWithEmailAndPassword
  } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js"

import {
    getFirestore,
    collection,
    addDoc,
    getDocs
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js"


const firebaseConfig = {
  apiKey: "AIzaSyAGEcYCl3xghnKYTGlT8Sl_lLTYnERniig",
  authDomain: "tdl-todolist.firebaseapp.com",
  projectId: "tdl-todolist",
  storageBucket: "tdl-todolist.appspot.com",
  messagingSenderId: "35565470940",
  appId: "1:35565470940:web:a53de3a22cb15bc4c96019"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

const signUp = document.getElementById('btnSignUp')
const email = document.getElementById('new_email').value;
const password = document.getElementById('new_password').value
const name = document.getElementById('name').value;
const password_confirm = document.getElementById('password-confirm').value;
const default_phone_number = '11970707070'

//console.log(db)

const newUser = {
    email: email,
    name: name, 
    phone_number: default_phone_number
}

const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(doc.data());
});

signUp.addEventListener('click', ()=> {

    // try {
    //     const docRef = addDoc(collection(db, "users"), newUser);
    //     console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //     console.error("Error adding document: ", e);
    // }

    console.log(newUser)

//   createUserWithEmailAndPassword(auth, email, password)
//     .then(user => {
//       console.log(user)
//     })
//     .catch(error => {
//       throw (error)
//     })



})