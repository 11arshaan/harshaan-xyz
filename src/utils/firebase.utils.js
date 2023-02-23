import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import {getStorage, ref} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA-8SZWJzzqh0jaWjtsgDq5EJ3xug-IF8A",
  authDomain: "harshaan-cv.firebaseapp.com",
  projectId: "harshaan-cv",
  storageBucket: "harshaan-cv.appspot.com",
  messagingSenderId: "911386100309",
  appId: "1:911386100309:web:11682527e3c7baf3c3cadc",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// creates an instance of the firestore database. Includes methods to read write to the actual db.
export const db = getFirestore();


// create instance of storage bucket
const storage = getStorage();   // this instantiates the storage service API
export const storageRef = ref(storage);  //this creates an object referring to the storage bucket (starting from the root)
export const artRef = ref(storage, 'art'); // this is how we create a reference to a specific file by using the second parameter of ref()



// GET IMAGE FROM DB
// const imageDocRef = doc(db, "art", uid);
// const userSnapshot = await getDoc(imageDocRef);