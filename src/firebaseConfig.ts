// Importa las funciones necesarias del SDK de Firebase
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBlVkjWYkCsG81Qu_oTIxFgXmxShtUEaHI",
  authDomain: "mvcpractica-c0502.firebaseapp.com",
  projectId: "mvcpractica-c0502",
  storageBucket: "mvcpractica-c0502.firebasestorage.app",
  messagingSenderId: "385650472295",
  appId: "1:385650472295:web:328beba376a3ce54182bc2"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app) // Inicializa Firestore

export { auth, db }