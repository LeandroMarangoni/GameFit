import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import firebaseConfig from './firebaseConfig.dev';

const app = initializeApp(firebaseConfig);
export const db = getStorage(app);
export const auth = getAuth(app);