// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8YztmrrnrptG1Pq-o3k3QafPvYiiB6VM",
  authDomain: "neumopym1-0.firebaseapp.com",
  projectId: "neumopym1-0",
  storageBucket: "neumopym1-0.firebasestorage.app",
  messagingSenderId: "580338901423",
  appId: "1:580338901423:web:7462872b93af7e22644f5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
