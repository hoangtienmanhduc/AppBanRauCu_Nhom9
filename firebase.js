import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA4SZ2TcR0HpDbN8emHinq_NZa9PATsXhk",
  authDomain: "app-banraucu.firebaseapp.com",
  projectId: "app-banraucu",
  storageBucket: "app-banraucu.appspot.com",
  messagingSenderId: "620244989788",
  appId: "1:620244989788:web:7591314bbf9fa79c95f399",
  measurementId: "G-JZXSZ29ZRZ"
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
  
