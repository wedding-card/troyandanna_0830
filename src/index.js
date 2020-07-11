import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjlIXQyfCwimYf0y-mwm1qOZHER251ITc",
  authDomain: "wedding-282208.firebaseapp.com",
  databaseURL: "https://wedding-282208.firebaseio.com",
  projectId: "wedding-282208",
  storageBucket: "wedding-282208.appspot.com",
  messagingSenderId: "452664017216",
  appId: "1:452664017216:web:08e8b907b13cb2cbe87aa5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
