import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDXJU63OadvS0u-knwHxfLh0zb06Dgu7bc',
  authDomain: 'angulartodo-4c7.firebaseapp.com',
  projectId: 'angulartodo-4c7',
  storageBucket: 'angulartodo-4c7.appspot.com',
  messagingSenderId: '954368704969',
  appId: '1:954368704969:web:8464665623f6268c97e818',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
