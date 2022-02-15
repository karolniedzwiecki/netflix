import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBpAlN2wwnCW7cy1dqRXzzJIKkaUrifsy4",
    authDomain: "netflix-6fa05.firebaseapp.com",
    projectId: "netflix-6fa05",
    storageBucket: "netflix-6fa05.appspot.com",
    messagingSenderId: "681859979179",
    appId: "1:681859979179:web:799093ef24674b009ee4ee"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;