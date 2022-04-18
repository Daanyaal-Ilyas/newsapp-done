
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBIj6KkH2y2n2XKN3ZZ1vUcEHTdcbwTQjY",
  authDomain: "newsapp-final.firebaseapp.com",
  projectId: "newsapp-final",
  storageBucket: "newsapp-final.appspot.com",
  messagingSenderId: "4878624088",
  appId: "1:4878624088:web:e260443a8d725b70aaf12d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();