import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Switch} from 'react-router-dom';

import Calendar from './Calendar';  // Import your Calendar component
import Home from './Home';          // Example of another component (you can change this)
import Login from './Login';
import Anniversary from './Anniversary';
import Sendmessage from './Sendmessage';
import Annivside from './Annivside';
import About from './About';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isAuthenticated = sessionStorage.getItem('authenticated') === 'true';

  // Check login status on initial load (use sessionStorage now)
  useEffect(() => {
    const storedLoginStatus = sessionStorage.getItem('authenticated');
    if (storedLoginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []); // Empty dependency array to run only once when the app loads

  // Protected route for Anniversary, only accessible if logged in
  const ProtectedRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />} />

          {/* About route */}
          <Route path="/about" element={<About />} />

          {/* Calendar route */}
          <Route path="/calendar" element={<Calendar />} />

          {/* Login route */}
          <Route 
            path="/login" 
            element={<Login setIsLoggedIn={setIsLoggedIn} />} 
          />

          {/* Protected Anniversary route */}
          <Route
          path="/anniversary"
          element={isAuthenticated ? <Anniversary /> : <Navigate to="/login" />}
          />

          {/* Message route */}
          <Route path="/sendmessage" element={<Sendmessage />} />

          {/* Annivside route */}
          <Route path="/annivside" element={<Annivside />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
