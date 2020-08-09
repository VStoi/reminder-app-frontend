import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


navigator.serviceWorker.register('./firebase-messaging-sw.js').then(function(reg) {
    if(reg.installing) {
        console.log('Service worker installing');
    } else if(reg.waiting) {
        console.log('Service worker installed');
    } else if(reg.active) {
        console.log('Service worker active');
    }
})

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
