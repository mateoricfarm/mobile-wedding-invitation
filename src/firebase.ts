import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase 설정
const firebaseConfig = {
  apiKey: "AIzaSyBmldAJy57sOZMu6mlYJZUqID14G0i27dw",
  authDomain: "weddingbook1019.firebaseapp.com",
  projectId: "weddingbook1019",
  storageBucket: "weddingbook1019.firebasestorage.app",
  messagingSenderId: "174635634801",
  appId: "1:174635634801:web:f71c33dde968f07b498bd0",
  measurementId: "G-6BV7PYGJK1"
};

// 앱 초기화 후 db 인스턴스 생성
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);