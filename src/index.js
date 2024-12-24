// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // Notice the change here: 'react-dom/client'
import './index.css';  // Import global CSS (including Tailwind)
import App from './App';  // Import App component

// Use createRoot instead of render (React 18+)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  {/* Render the App component */}
  </React.StrictMode>
);
