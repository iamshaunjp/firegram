import * as firebase from 'firebase/app'
// storage for images
import 'firebase/storage';
// database
import 'firebase/firestore';

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
const app = initializeApp(firebaseConfig);

// initialize storage
const projectStorage = firebase.storage();

// initilaize database
const projectFirestore = firebase.firestore();

export {projectStorage, projectFirestore};
