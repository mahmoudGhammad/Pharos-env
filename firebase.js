// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3rn4x0kpoqEi5aE9ZK3MbbG7CMlSJw7c",
  authDomain: "pharos-claim.firebaseapp.com",
  projectId: "pharos-claim",
  storageBucket: "pharos-claim.appspot.com",
  messagingSenderId: "871821533515",
  appId: "1:871821533515:web:45d7f335595386c59b08ce",
  measurementId: "G-RNX4KT3N54"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };