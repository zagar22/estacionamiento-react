import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import favicon from './assets/parking_PNG36.png'; // Importa la imagen del favicon


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'icon';
link.href = favicon;
document.getElementsByTagName('head')[0].appendChild(link);

