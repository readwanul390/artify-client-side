import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey:"AIzaSyA5VY-bkMbqj9z-CUfWWerVSNHYVYpz_4s",
  authDomain: "artify-9f0a8.firebaseapp.com",
  projectId: "artify-9f0a8",
  storageBucket: "artify-9f0a8.firebasestorage.app",
  messagingSenderId: "699755592944",
  appId: "1:699755592944:web:81f7f3093ba16eecd89635"
};

// ✅ ✅ THIS IS THE FIX:
export const app = initializeApp(firebaseConfig);
