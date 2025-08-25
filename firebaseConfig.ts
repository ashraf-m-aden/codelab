import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

export const config = {
  apiKey: "AIzaSyCof0afP-LZE15x4Hp3dEDZYD2RLZFixsc",

  authDomain: "it-codelab.firebaseapp.com",

  projectId: "it-codelab",

  storageBucket: "it-codelab.firebasestorage.app",

  messagingSenderId: "393096720502",

  appId: "1:393096720502:web:67ea32d593b0a00d72af57",

  measurementId: "G-39W2VS7V6J"

}

// Get a Firestore instance
firebase.initializeApp(config)
export const db = firebase.firestore()
export const storage = firebase.storage()
export const auth = firebase.auth()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }
