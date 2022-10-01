// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore/lite"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9D2NCPu34ewa419S-o-ht8wnDOJWXHss",
  authDomain: "ts-todo-a09b7.firebaseapp.com",
  projectId: "ts-todo-a09b7",
  storageBucket: "ts-todo-a09b7.appspot.com",
  messagingSenderId: "307638239857",
  appId: "1:307638239857:web:84ed64cd027ba5ce6051d0",
  measurementId: "G-68X7VBN00K",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const analytics = getAnalytics(app)

export { db }
