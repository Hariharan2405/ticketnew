import {initializeApp} from "firebase/app"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB7zehXvJFG9NHf4C4mYWoem2RkAn63RBM",
    authDomain: "fir-ticketnew-fde99.firebaseapp.com",
    projectId: "fir-ticketnew-fde99",
    storageBucket: "fir-ticketnew-fde99.appspot.com",
    messagingSenderId: "295644206137",
    appId: "1:295644206137:web:4b771f81d0a9802e0c29e8"
  };

  const app=initializeApp(firebaseConfig);
  
  export let auth=getAuth(app);