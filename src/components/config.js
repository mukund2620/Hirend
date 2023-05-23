
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAi8W1-qZ22AkPy2TkbCFV2VzHqrJZEYtU",
  authDomain: "hirend.firebaseapp.com",
  projectId: "hirend",
  storageBucket: "hirend.appspot.com",
  messagingSenderId: "490113428197",
  appId: "1:490113428197:web:abe31a593f95ef1ea9020c",
  measurementId: "G-BQ3J9WW0LB"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth, provider}