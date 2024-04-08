// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp1AgrlPFI1hLxPCFxfyeiZKBW9jHf03M",
  authDomain: "assignment-09-sahidul.firebaseapp.com",
  projectId: "assignment-09-sahidul",
  storageBucket: "assignment-09-sahidul.appspot.com",
  messagingSenderId: "1082619427276",
  appId: "1:1082619427276:web:622c092753d4ec735b4569"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;      