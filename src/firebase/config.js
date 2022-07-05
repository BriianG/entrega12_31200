import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAZP1zScuuPQaFnUztsrvxnl57iP5cZreo",
  authDomain: "comision31200sca.firebaseapp.com",
  projectId: "comision31200sca",
  storageBucket: "comision31200sca.appspot.com",
  messagingSenderId: "799706773523",
  appId: "1:799706773523:web:6c1af503f25ec004b9e7e6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const  getFirestoreApp = () =>{

    return app;
}
