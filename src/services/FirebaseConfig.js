import firebase from 'firebase/app';
import 'firebase/database';

require ("firebase/firestore")

import { getFirestore, connectFirestoreEmulator, initializeFirestore } from 'firebase/firestore';
import {getAuth, connectAuthEmulator} from 'firebase/auth'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  experimentalForceLongPolling: true,

  databaseURL: 'https://financas.firebaseio.com',

  apiKey: "AIzaSyAqmmnw-ZUuODTCORH5LF46t2MQFderw8M",

  authDomain: "financas-14bda.firebaseapp.com",

  projectId: "financas-14bda",

  storageBucket: "financas-14bda.appspot.com",

  messagingSenderId: "560028654268",

  appId: "1:560028654268:web:192a15fc56008c1cfbceb9",

  measurementId: "G-TZWWZN0Z6H"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
//export const db = getFirestore()
export const db = initializeFirestore(app, {experimentalForceLongPolling: true})
const auth = getAuth();
//connectAuthEmulator(auth, "http://localhost:9099");

export default app
