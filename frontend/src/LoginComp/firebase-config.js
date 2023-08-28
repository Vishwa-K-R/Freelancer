import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBu21fYWzSV3EbnKnqffpazjJsaO4u5U",
    authDomain: "freelancer-1545a.firebaseapp.com",
    projectId: "freelancer-1545a",
    storageBucket: "freelancer-1545a.appspot.com",
    messagingSenderId: "316194984364",
    appId: "1:316194984364:web:cebab407be92b4b799ea09"
  };

const app=initializeApp(firebaseConfig);

export const auth=getAuth(app);