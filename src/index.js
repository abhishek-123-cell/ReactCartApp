import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import *as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyApz_kXjU5EY7HQwY9rfOdW5lUzYpXZdws",
  authDomain: "cart-b2052.firebaseapp.com",
  databaseURL: "https://cart-b2052.firebaseio.com",
  projectId: "cart-b2052",
  storageBucket: "cart-b2052.appspot.com",
  messagingSenderId: "784977506749",
  appId: "1:784977506749:web:f9b7cb0ed50ee8bf40e2d4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
