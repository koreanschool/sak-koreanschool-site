import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase/app';

const firebaseConfig = {
	apiKey: "AIzaSyAaoqIQyL3gQY75wvjJIOs0xfDNhTdArDM",
	authDomain: "schooldb-9a633.firebaseapp.com",
	databaseURL: "https://schooldb-9a633.firebaseio.com",
	projectId: "schooldb-9a633",
	storageBucket: "schooldb-9a633.appspot.com",
	messagingSenderId: "992347550068",
	appId: "1:992347550068:web:f45f21d8d4d78a5e"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App firebase={firebase} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
