// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAgb8fIs4QYfkmcEUAdUKOHlb8eLws5Pro", // Your API Key
  authDomain: "swiftdesk-67ad8.firebaseapp.com",
  projectId: "swiftdesk-67ad8",
  storageBucket: "swiftdesk-67ad8.firebasestorage.app",
  messagingSenderId: "513588911430",
  appId: "1:513588911430:web:d38570f42dee2845d35947",
  measurementId: "G-0ZNY3PQL8K"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db}; // ✅ Only export the initialized services