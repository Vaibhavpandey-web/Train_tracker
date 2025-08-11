import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDHIbH_qR-C4p_nIG4GJTpLbWjOAqVXsSA",
  authDomain: "train-tracker-72c67.firebaseapp.com",
  projectId: "train-tracker-72c67",
  storageBucket: "train-tracker-72c67.firebasestorage.app",
  messagingSenderId: "932338305996",
  appId: "1:932338305996:web:7611c6d891f8864f5f2b69",
  measurementId: "G-D6XKG50B3D"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };