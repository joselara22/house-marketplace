// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCOROfrf05zv3OFItspW8gV31FZu-tdU6k',
  authDomain: 'house-marketplace-app-28c5d.firebaseapp.com',
  projectId: 'house-marketplace-app-28c5d',
  storageBucket: 'house-marketplace-app-28c5d.appspot.com',
  messagingSenderId: '579464254247',
  appId: '1:579464254247:web:3781c7f0daa7c025720f02',
  measurementId: 'G-0CJYR5WR61',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();
