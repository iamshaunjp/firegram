import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage"

var firebaseConfig = {
  apiKey: "AIzaSyDLmnoBvnjOQ-AaJgDw1DnVBiTETbcp8LI",
  authDomain: "the-net-ninja-sandbox.firebaseapp.com",
  databaseURL: "https://the-net-ninja-sandbox.firebaseio.com",
  projectId: "the-net-ninja-sandbox",
  storageBucket: "the-net-ninja-sandbox.appspot.com",
  messagingSenderId: "485942827092",
  appId: "1:485942827092:web:1811d9d8f1f5fabcd5b5c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectFirestore= getFirestore(app);
const projectStorage = getStorage(app);
const timestamp = serverTimestamp();

export { projectStorage, projectFirestore, timestamp };
