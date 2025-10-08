  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkpTOq8i_VjxMNS18IhWjbYRBUodcy-a4",
  authDomain: "career-counseling-websit-9fab3.firebaseapp.com",
  projectId: "career-counseling-websit-9fab3",
  storageBucket: "career-counseling-websit-9fab3.firebasestorage.app",
  messagingSenderId: "160759914235",
  appId: "1:160759914235:web:5e712006449d41ba90da5e",
  measurementId: "G-3HLTP22F9K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
// All export here (below)
// export { app, analytics, auth };
// or export like below manually one by one
export { auth };
