import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.render(

  

    <React.StrictMode>
      <Auth0Provider
        domain="dev-jska3woj.us.auth0.com"
        clientId="0g4VC4AFib8Iq5bFZ0KaihsB66ORsMq1"
        redirectUri={window.location.origin}
         >
    <App />
  </Auth0Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

reportWebVitals();
