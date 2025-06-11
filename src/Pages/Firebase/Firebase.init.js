
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDFo3N0_CzehtDwBlj22T06gTB7KAbe-V4",
  authDomain: "click-kart-3fab8.firebaseapp.com",
  projectId: "click-kart-3fab8",
  storageBucket: "click-kart-3fab8.firebasestorage.app",
  messagingSenderId: "406740065096",
  appId: "1:406740065096:web:a45fd68b4b19e7e62e717d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;