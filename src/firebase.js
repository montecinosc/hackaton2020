import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDmRrmaQh11PkGwG9iyEN919vgmlQ4AMpM",
    authDomain: "amusas-d4c00.firebaseapp.com",
    databaseURL: "https://amusas-d4c00.firebaseio.com",
    projectId: "amusas-d4c00",
    storageBucket: "amusas-d4c00.appspot.com",
    messagingSenderId: "13720839196",
    appId: "1:13720839196:web:72b3f0fc29ebcbb7cd2bd9"
};
//Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export {
    db,
    auth
};