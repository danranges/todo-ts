// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { collection, addDoc } from "firebase/firestore"

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
export const db = getFirestore(app)

const testAdd = async () => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    })
    console.log("Document written with ID: ", docRef.id)
  } catch (e) {
    console.error("Error adding document: ", e)
  }
}
