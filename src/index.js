// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { IconContext } from 'react-icons';

ReactDOM.render(
  <React.StrictMode>
    <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
      <App />
    </IconContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
