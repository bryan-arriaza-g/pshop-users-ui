/* eslint-disable comma-dangle */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('users-mfe'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
