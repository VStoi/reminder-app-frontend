import React from 'react';
import { Provider } from 'react-redux';
import store from "./redux/store";
import './App.scss';
import 'antd/dist/antd.css';

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

  return (
      <div className="App">
        <Provider store={store}>
          {routing()}
        </Provider>
      </div>
  )
}

export default App;
