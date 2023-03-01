import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  addDoc,
  collection,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";

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
export const storage = getStorage(); // this instantiates the storage service API
export const storageRef = ref(storage); //this creates an object referring to the storage bucket (starting from the root)
export const artRef = ref(storage, "art"); // this is how we create a reference to a specific file by using the second parameter of ref()

// GET IMAGE FROM DB
// const imageDocRef = doc(db, "art", uid);
// const userSnapshot = await getDoc(imageDocRef);

// UPLOAD IMAGE
export async function uploadImage(imageFile, imageName, imageDescription) {
  const metadata = {
    contentType: imageFile.type,
  };

  let imageURL;
  const imageRef = ref(storage, "art/" + imageName);
  const uploadTask = uploadBytesResumable(imageRef, imageFile, metadata);
  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case "storage/unauthorized":
          // User doesn't have permission to access the object
          break;
        case "storage/canceled":
          // User canceled the upload
          break;

        // ...

        case "storage/unknown":
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    },
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        imageURL = downloadURL;
        console.log("File available at", downloadURL);
        const imageData = {
          title: imageName,
          description: imageDescription,
          url: imageURL,
        };

        const imageDoc = addDoc(collection(db, "art"), imageData);
        console.log("Image doc added with ID: ", imageDoc.id);
      });
    }
  );
}
