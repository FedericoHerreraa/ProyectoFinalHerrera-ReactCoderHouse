
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCTYN_9_XS3Hlw16rU60p6X3Q09LR7y6oE",
  authDomain: "e-commercereactcoderhouse.firebaseapp.com",
  projectId: "e-commercereactcoderhouse",
  storageBucket: "e-commercereactcoderhouse.appspot.com",
  messagingSenderId: "552017326035",
  appId: "1:552017326035:web:02c6cff2098d6302ec4926"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)