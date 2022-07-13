import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvvjDHfMnXZFWRW_3K1TMJKIOd8LqjDqw",
  authDomain: "banco-nutre.firebaseapp.com",
  databaseURL: "https://banco-nutre-default-rtdb.firebaseio.com",
  projectId: "banco-nutre",
  storageBucket: "banco-nutre.appspot.com",
  messagingSenderId: "253550941162",
  appId: "1:253550941162:web:6484578d53318e75f1d893",
  measurementId: "G-C8R8TSQC9E",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
