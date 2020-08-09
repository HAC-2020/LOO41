import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

// var config = {
//   apiKey: "AIzaSyCpt4XJSBHKM300Y7RtBI0UxsgIaNeLP6A",
//   authDomain: "valeo-app.firebaseapp.com",
//   databaseURL: "https://valeo-app.firebaseio.com",
//   projectId: "valeo-app",
//   storageBucket: "valeo-app.appspot.com",
//   messagingSenderId: "263685050342",
//   appId: "1:263685050342:web:3516a824e7f3e86eb79027",
//   measurementId: "G-7RBXXR2T6M"
// };
// // Initialize Firebase
// firebase.initializeApp(config);
// firebase.analytics();


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
