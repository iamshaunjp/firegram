import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYXPcFn-zeW813LHjFJW4xbIAwQPy3eFA",
  authDomain: "firegram-54635.firebaseapp.com",
  projectId: "firegram-54635",
  storageBucket: "firegram-54635.appspot.com",
  messagingSenderId: "414136661409",
  appId: "1:414136661409:web:4f3cfea020002eb26247e0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };  