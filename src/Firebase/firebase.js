// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getDatabase} from 'firebase/database';
import {getStorage} from 'firebase/storage';

// import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD2189RwDO_8TlKrcxAGAIRbnBY0c997OE',
  authDomain: 'tabibi-2b9fa.firebaseapp.com',
  databaseURL: 'https://tabibi-2b9fa-default-rtdb.firebaseio.com',
  projectId: 'tabibi-2b9fa',
  storageBucket: 'tabibi-2b9fa.appspot.com',
  messagingSenderId: '177772215946',
  appId: '1:177772215946:web:84007a6f54867391df7773',
  measurementId: 'G-SDW8NXGE0D',
};
// Initialize Firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// var auth = initializeAuth(app, {
// });
// auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);
export {database, storage};
// firebase.initializeApp(firebaseConfig);

// const auth = firebase.auth();

// const database = firebase.database();

// export {auth, database};
