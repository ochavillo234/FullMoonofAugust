import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { Link } from 'react-router-dom';

import hide from './assets/hide.svg';
import show from './assets/show.svg';
import cute from './assets/cute.png';

import './Login.css';
import LoadingPage from './Load'; // Import the LoadingPage component

const Login = ({ setIsLoggedIn }) => {  // Use the prop correctly here
  const [showPassword, setShowPassword] = useState(false);
  const [inputPassword, setInputPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate(); // Initialize navigate function

  const hardcodedPassword = 'mylove0910'; // Hardcoded password

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setInputPassword(value);

    // Check if the password matches as the user types
    if (value === hardcodedPassword) {
      setErrorMessage(''); // Clear error message on correct password
      setLoading(true); // Start loading

      // Simulate loading delay
      setTimeout(() => {
        sessionStorage.setItem('authenticated', 'true'); // Store login status
        setIsLoggedIn(true); // Update the login status using the prop
        setLoading(false); // Stop loading
        navigate('/anniversary'); // Redirect to Anniversary page
      }, 1500); // Show loading for 1.5 seconds before navigating
    } else {
      setErrorMessage('Incorrect password'); // Show error message for wrong password
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-photo">
      {/* Show loading page when loading is true */}
      {loading && <LoadingPage />}

      {/* Outer div (container) */}
      <div className="boxlog w-full max-w-lg bg-white rounded-lg solid-shadow">
        {/* Upper section */}
        <div className="bg-purple-300 p-4 rounded-t-lg flex justify-center items-center">
          <div className="flex w-full">
            {/* Left 50% Section */}
            <div className="w-8/12 p-2 flex flex-col justify-center items-start">
              <h2 className="texttitlle text-2xl text-center font-shrikhand">astrocane</h2>
              <p className="textsecond text-sm text-center">messages</p>
            </div>

            {/* Right 50% Section */}
            <div className="w-4/12 p-2 flex justify-center items-center">
              <img
                src={cute} // The path to your image
                alt="cute"
                className="w-full h-13" // Adjust the size of the icon (smaller size)
              />
            </div>
          </div>
        </div>

        {/* Middle section with password input */}
        <div className="p-4 rounded-b-lg">
          <h2 className="textpass text-lg text-center text-gray-800 font-semibold mb-4">Enter The Password</h2>

          <div className="passinput flex items-center space-x-3 bg-blue-50 p-2 rounded-lg border-2 border-purple-300">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={inputPassword}
              onChange={handlePasswordChange}
              className="inputbox w-full p-3 rounded-md border-2 border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="button"
              onClick={togglePassword}
              className="buttonpass p-2 rounded-md bg-white text-white border border-purple-500"
            >
              {showPassword ? (
                <img
                  src={hide}
                  alt="hide"
                  className="hides w-5 h-5"
                />
              ) : (
                <img
                  src={show}
                  alt="show"
                  className="shows w-5 h-5"
                />
              )}
            </button>
          </div>

          {/* Display error message */}
          {errorMessage && (
            <p className="errormess text-red-500 text-sm mt-2 text-center">{errorMessage}</p>
          )}
        </div>

        {/* Bottom section */}
        <div className="bottomsec p-4 rounded-b-lg">
          <div className="w-full border-t-2 border-gray-300"></div>
          <div className="flex justify-center items-center space-x-4 pt-6">
            <Link to='/about'>
              <button className="footer-e px-7 py-2 border-2 text-xs border-gray-300 text-gray-500 rounded-lg hover:bg-gray-100 transition duration-300">
                about
              </button>
            </Link>

            <Link to='/calendar'>
              <button className="footer-f px-7 py-2 border-2 text-xs border-gray-300 text-gray-500 rounded-lg hover:bg-gray-100 transition duration-300">
                calendar
              </button>
            </Link>

            <Link to='/anniversary'>
              <button className="footer-f px-7 py-2 border-2 text-xs border-gray-300 text-gray-500 rounded-lg hover:bg-gray-100 transition duration-300">
                anniversary
              </button>
            </Link>

            <Link to='/'>
              <button className="footer-e px-7 py-2 border-2 text-xs border-gray-300 text-gray-500 rounded-lg hover:bg-gray-100 transition duration-300">
                home
              </button>
            </Link>
          </div>

          <div className="pt-5 text-sm text-gray-300 text-center">
            <p className='markings'>(made with love)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
