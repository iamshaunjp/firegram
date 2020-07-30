import * as firebase from 'firebase/app';
//for images : 
import 'firebase/storage'; 
//the database :
import 'firebase/firestore'; 
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBxsawqu4Stvozzv7fmRK6t8mmhaxe_AIU",
    authDomain: "firegram-214eb.firebaseapp.com",
    databaseURL: "https://firegram-214eb.firebaseio.com",
    projectId: "firegram-214eb",
    storageBucket: "firegram-214eb.appspot.com",
    messagingSenderId: "19291923879",
    appId: "1:19291923879:web:5abc3045d4a9914f730282"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//Initialize Storage
const projectStorage = firebase.storage();

//Initialize FireStore
const projectFireStore = firebase.firestore();

export {projectStorage,projectFireStore};