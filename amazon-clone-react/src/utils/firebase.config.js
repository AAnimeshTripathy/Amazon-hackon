// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLrPAgqFBj9_Ch6MRz9PjTuaHeE_TR2D4",
  authDomain: "fir-b2ecd.firebaseapp.com",
  projectId: "fir-b2ecd",
  storageBucket: "fir-b2ecd.appspot.com",
  messagingSenderId: "822894972976",
  appId: "1:822894972976:web:c82770a35fd185a97c9df5",
  // measurementId: "G-34KD38TWV1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// const analytics = getAnalytics(app);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

// Sign in with google
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
