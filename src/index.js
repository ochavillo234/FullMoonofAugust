// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' for React 18+
import './index.css'; // Import global CSS (including Tailwind or other styles)
import App from './App'; // Import the App component

// Create a root for the React application (React 18+)
const root = ReactDOM.createRoot(document.getElementById('root')); // Get the element where React will mount
root.render(
  <React.StrictMode>
    <App /> {/* Render the App component */}
  </React.StrictMode>
);
