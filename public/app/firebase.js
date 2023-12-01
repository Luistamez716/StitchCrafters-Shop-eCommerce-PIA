import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyCKbh8fifsS2PUQa43Bgp6sm-sMu87B1_w",
    authDomain: "prueba-1ef2a.firebaseapp.com",
    projectId: "prueba-1ef2a",
    storageBucket: "prueba-1ef2a.appspot.com",
    messagingSenderId: "783571546935",
    appId: "1:783571546935:web:e5e1511da113450d29e0b2",
    measurementId: "G-LYMH6BK1TJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)