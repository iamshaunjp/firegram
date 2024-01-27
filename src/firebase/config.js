import firebase from 'firebase/compat/app';
import "firebase/compat/storage";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyAkS1xW0I75wvh9bN2iUUto3dbzrNYVdKI",
authDomain: "ninja-firegram-1fb77.firebaseapp.com",
projectId: "ninja-firegram-1fb77",
storageBucket: "ninja-firegram-1fb77.appspot.com",
messagingSenderId: "1098217026691",
appId: "1:1098217026691:web:61f310cc8ebbd5cd4997b6",
measurementId: "G-EFG49YVV0Q"
};

// Initialize Firebase


firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };