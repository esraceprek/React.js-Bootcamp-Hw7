import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store';
import "./App.css";

import { BrowserRouter } from 'react-router-dom';



ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter store={store}>

      <App />

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
  
);



