import React from 'react';
import './App.scss';
import {messaging} from "./services/init-fcm";
import {routing} from "./Routes";

function App() {
  React.useEffect(() => {
    messaging.getToken().then((currentToken) => {
      if (currentToken) {
        console.log(currentToken)
      } else {
        // Show permission request.
        console.log('No Instance ID token available. Request permission to generate one.');
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
  })

  return routing();
}

export default App;
