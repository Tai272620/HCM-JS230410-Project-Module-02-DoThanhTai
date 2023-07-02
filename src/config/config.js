import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAE7QxsOhHrbNzAeH0PfueodXfWEMrGZqc",
    authDomain: "ecommerce-app-aa7d6.firebaseapp.com",
    projectId: "ecommerce-app-aa7d6",
    storageBucket: "ecommerce-app-aa7d6.appspot.com",
    messagingSenderId: "188360299999",
    appId: "1:188360299999:web:6b34525613e266f710206a",
    measurementId: "G-7VNQKSJDRW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

