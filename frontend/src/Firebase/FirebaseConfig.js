import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAsem6Vggg2qOsBgGoP--hAJkBDYrqNF_Y",
  authDomain: "boutiquemern-50699.firebaseapp.com",
  projectId: "boutiquemern-50699",
  storageBucket: "boutiquemern-50699.appspot.com",
  messagingSenderId: "762602352985",
  appId: "1:762602352985:web:78e041391440e480685c48"
};

const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)
