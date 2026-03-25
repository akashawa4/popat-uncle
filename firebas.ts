// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARJeJ2wRTiYpbWPQsIsK08xRYxuWnf27U",
  authDomain: "test-1ffe5.firebaseapp.com",
  projectId: "test-1ffe5",
  storageBucket: "test-1ffe5.firebasestorage.app",
  messagingSenderId: "134003180054",
  appId: "1:134003180054:web:f2c51d6aca0c4e5260ab37",
  measurementId: "G-XYB6M8XKGH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);