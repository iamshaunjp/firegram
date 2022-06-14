// import * as firebase from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB5Xs7rg0ogBK5D9K3Endg9BVSEXu_ST8",
  authDomain: "ror-artgram-a8607.firebaseapp.com",
  projectId: "ror-artgram-a8607",
  storageBucket: "ror-artgram-a8607.appspot.com",
  messagingSenderId: "367221566900",
  appId: "1:367221566900:web:e791806968b7ba22e356e1"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// initialize storage
const projectStorage = firebase.storage();

// initialize database
const projectFirestore = firebase.firestore();

// function to get timestamp from firestore
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
