// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg9KDaydlLcZ1Mye21wPgMHGysGGiQdsc",
  authDomain: "personal-portfolio-88581.firebaseapp.com",
  projectId: "personal-portfolio-88581",
  storageBucket: "personal-portfolio-88581.appspot.com",
  messagingSenderId: "1041166141704",
  appId: "1:1041166141704:web:b560c6800388eefa0804bd",
  measurementId: "G-8MKSVG8VJQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);