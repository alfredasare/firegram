import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyCxalhgM6FTVw7gUbKhgakMl24EJEex-LM",
    authDomain: "firegram-5d9a6.firebaseapp.com",
    databaseURL: "https://firegram-5d9a6.firebaseio.com",
    projectId: "firegram-5d9a6",
    storageBucket: "firegram-5d9a6.appspot.com",
    messagingSenderId: "775305821510",
    appId: "1:775305821510:web:4180ce53bb01638cdfb947",
    measurementId: "G-RK2NBX6321"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const firestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { storage, firestore, timestamp };