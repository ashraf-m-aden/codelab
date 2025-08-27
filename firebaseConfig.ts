// Import only what you need
import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp, GeoPoint } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const app = initializeApp({
  apiKey: "AIzaSyCof0afP-LZE15x4Hp3dEDZYD2RLZFixsc",

  authDomain: "it-codelab.firebaseapp.com",

  projectId: "it-codelab",

  storageBucket: "it-codelab.firebasestorage.app",

  messagingSenderId: "393096720502",

  appId: "1:393096720502:web:67ea32d593b0a00d72af57",

  measurementId: "G-39W2VS7V6J"

});

// Export instances
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

// Export Firestore types
export { Timestamp, GeoPoint };


