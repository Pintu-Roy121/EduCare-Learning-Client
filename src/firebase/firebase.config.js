// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdjrufavO9pzNd53xm-cOTmim0-esmcxU",
    authDomain: "edu-care-learning.firebaseapp.com",
    projectId: "edu-care-learning",
    storageBucket: "edu-care-learning.appspot.com",
    messagingSenderId: "681990000234",
    appId: "1:681990000234:web:2c6ac79771d0c30cf88413"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;