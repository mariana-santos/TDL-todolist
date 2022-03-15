import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAGEcYCl3xghnKYTGlT8Sl_lLTYnERniig",
    authDomain: "tdl-todolist.firebaseapp.com",
    projectId: "tdl-todolist",
    storageBucket: "tdl-todolist.appspot.com",
    messagingSenderId: "35565470940",
    appId: "1:35565470940:web:a53de3a22cb15bc4c96019"
};

export const firebaseImpl = firebase.initializeApp(firebaseConfig);
export const firebaseDatabase = firebase.database();