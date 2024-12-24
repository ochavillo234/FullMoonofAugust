import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Annivside from './Annivside'; // Import the Annivside component
import './Anniversary.css'; // Optional: Add custom CSS if needed
import Sendmessage from './Sendmessage';
import love from './assets/love.png';

const Anniversary = () => {
  const navigate = useNavigate();
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState('annivside'); // State to track the current page

  useEffect(() => {
    if (sessionStorage.getItem('authenticated') !== 'true') {
      navigate('/login');
    }

    const handleClickOutside = (event) => {
      if (event.target.closest('.dropdown-menu') || event.target.closest('.menu-icon')) {
        return;
      }
      setShowDropdown(false);
      setIsMenuClicked(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('authenticated');
    navigate('/login');
  };

  const handleHomeClick = () => {
    navigate('/home');
  };

  const handleMenuClick = () => {
    setIsMenuClicked(!isMenuClicked);
    setShowDropdown(!showDropdown);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'annivside':
        return <Annivside />;
      case 'message':
        return <Sendmessage />;
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-background">
      <div className="w-5/12 bg-white rounded-md solid-shadow overflow-hidden relative">
        <div className="bg-purple-300 m-4 rounded-md flex justify-between items-center">
          <div className="w-3/12 flex justify-start items-center p-2">
            <img
              src={love}
              alt="Small Image"
              className="w-auto h-auto rounded-full"
            />
          </div>
          <div className="w-5/12 flex justify-center items-center">
            <h1 className="text-sm font-sometype font-semibold">iloveyou.exe</h1>
          </div>
          <div className="w-1/4 flex justify-end items-center p-2 mr-2 relative">
            <div
              className="w-9 h-9 p-2 m-2 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex justify-center items-center shadow-lg cursor-pointer menu-icon hover:scale-110 transition-transform duration-300"
              onClick={handleHomeClick}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
                <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
              </svg>
            </div>
            <div
              className="w-9 h-9 p-2 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex justify-center items-center shadow-lg cursor-pointer menu-icon hover:scale-110 transition-transform duration-300"
              onClick={handleMenuClick}
            >
              {isMenuClicked ? (
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
                  <path d="M120-240v-80h520v80H120Zm664-40L584-480l200-200 56 56-144 144 144 144-56 56ZM120-440v-80h400v80H120Zm0-200v-80h520v80H120Z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
                  <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
              )}
            </div>
            {showDropdown && (
              <div className="absolute z-50 top-12 right-0 w-48 bg-white border border-gray-300 shadow-xl rounded-lg dropdown-menu animate-fade-in">
                <div
                  className="flex items-center gap-x-3 p-2 text-sm text-gray-700 font-medium hover:bg-purple-100 hover:text-purple-700 rounded-lg cursor-pointer transition-colors duration-200"
                  onClick={() => setCurrentPage('annivside')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666">
                    <path d="M160-80q-17 0-28.5-11.5T120-120v-200q0-33 23.5-56.5T200-400v-160q0-33 23.5-56.5T280-640h160v-58q-18-12-29-29t-11-41q0-15 6-29.5t18-26.5l56-56 56 56q12 12 18 26.5t6 29.5q0 24-11 41t-29 29v58h160q33 0 56.5 23.5T760-560v160q33 0 56.5 23.5T840-320v200q0 17-11.5 28.5T800-80H160Zm120-320h400v-160H280v160Zm-80 240h560v-160H200v160Zm80-240h400-400Zm-80 240h560-560Zm560-240H200h560Z" />
                  </svg>
                  Annivside
                </div>
                <div
                  className="flex items-center gap-x-3 p-2 text-sm text-gray-700 font-medium hover:bg-purple-100 hover:text-purple-700 rounded-lg cursor-pointer transition-colors duration-200"
                  onClick={() => setCurrentPage('message')}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#666666"
                  >
                    <path d="M880-80 720-240H320q-33 0-56.5-23.5T240-320v-40h440q33 0 56.5-23.5T760-440v-280h40q33 0 56.5 23.5T880-640v560ZM160-473l47-47h393v-280H160v327ZM80-280v-520q0-33 23.5-56.5T160-880h440q33 0 56.5 23.5T680-800v280q0 33-23.5 56.5T600-440H240L80-280Zm80-240v-280 280Z" />
                  </svg>
                  Message Me
                </div>
                <div
                  className="flex items-center gap-x-3 p-2 text-sm text-gray-700 font-medium hover:bg-purple-100 hover:text-purple-700 rounded-lg cursor-pointer transition-colors duration-200"
                  onClick={handleLogout}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#666666"
                  >
                    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
                  </svg>
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="p-6 border-2 m-4 rounded-md border-purple-500">
          {renderContent()}
        </div>

        <div className="rounded-b-lg">
          <div className="p-4 mb-2 text-sm text-gray-300 text-center">
            <p>(made with love)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anniversary;
