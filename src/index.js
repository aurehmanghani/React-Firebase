import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';


// Initialize Firebase
var config = {
    apiKey: "AIzaSyBw83tNl2Vy1AbV-XgPyrXXMnleoQVMZ7k",
    authDomain: "web-quickstart-6e8b9.firebaseapp.com",
    databaseURL: "https://web-quickstart-6e8b9.firebaseio.com",
    storageBucket: "web-quickstart-6e8b9.appspot.com",
    messagingSenderId: "706925686066"
};
firebase.initializeApp(config);

ReactDOM.render( < App / > , document.getElementById('root'));