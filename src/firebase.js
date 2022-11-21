// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, addDoc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNsGTJafF52K6s8d_Y63PHtWaMwBuIhvA",
  authDomain: "grouponsaas.firebaseapp.com",
  projectId: "grouponsaas",
  storageBucket: "grouponsaas.appspot.com",
  messagingSenderId: "212740036467",
  appId: "1:212740036467:web:1e775cb7105621eef59706",
  measurementId: "G-0ETZ4Q62ML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app);