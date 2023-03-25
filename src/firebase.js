import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDo0LVFKYMTUaLE-T36J52eGA3L9YrGZog",
  authDomain: "tract-cybernetics-auth.firebaseapp.com",
  projectId: "tract-cybernetics-auth",
  storageBucket: "tract-cybernetics-auth.appspot.com",
  messagingSenderId: "494559093162",
  appId: "1:494559093162:web:320f40adab4c4a0c750bd3",
  measurementId: "G-VZ81BF2PVY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
