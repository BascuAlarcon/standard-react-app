import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
 
import './styles/GlobalStyle.css' 
import { ItemApp } from './ItemsApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ItemApp/>
    </BrowserRouter>
  </React.StrictMode>
);
 