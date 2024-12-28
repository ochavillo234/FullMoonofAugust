import React, { useState } from "react";
import { Link } from 'react-router-dom';

import './About.css';

import profileImage1 from "./assets/id2.png"; // Replace with the path to Rica's image
import profileImage2 from "./assets/id1.png"; // Replace with the path to Dexter's image
import greenBg from "./assets/green.png"; // Background for Rica
import pinkBg from "./assets/pink.png"; // Background for Dexter

const profiles = [
{
    name: "Dexter Ochavillo",
    image: profileImage2,
    backgroundImage: pinkBg, // Use the correct path for Dexter's background
    },

  {
    name: "Rica Zaldivia",
    image: profileImage1,
    backgroundImage: greenBg, // Use the correct path for Rica's background
  },
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? profiles.length - 1 : prevIndex - 1
    );
  };

  const currentProfile = profiles[currentIndex];

  return (
    <div
      className="bg-first flex justify-center items-center min-h-screen bg-cover bg-repeat bg-center"
      style={{
        backgroundImage: `url(${currentProfile.backgroundImage})`,
      }}
    > 
      <div className="w-11/12 md:w-5/12 overflow-hidden relative rounded-xl solid-shadow bg-white p-6">
        {/* Top Section */}
        <div className="flex justify-between items-center mb-4">
          <button className="leftprev items-center justify-center p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-all" onClick={handlePrevious}>
            <svg xmlns="http://www.w3.org/2000/svg" className='buttonprev' height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666">
              <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
            </svg>
          </button>

          <div className="midtext text-center text-sm bg-gray-200 px-10 py-1 rounded-xl">
            <a href="" rel="noopener noreferrer" className="mt text-sm text-blue-500 hover:underline">
              https://fullmoonsofaugust.com/aboutus
            </a>
          </div>

          <button className="rightnext items-center justify-center p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-all" onClick={handleNext}>
          <svg xmlns="http://www.w3.org/2000/svg" className="buttonnext" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
          </button>
        </div>

        {/* Profile Section */}
        <div className="text-center">
          <div className="cpn text-3xl font-bold text-gray-800 mb-4">{currentProfile.name}</div>
          <img src={currentProfile.image} alt={currentProfile.name} className="cid w-auto h-50 mx-auto mb-4" />
        </div>

        {/* Footer Section */}

        <div className="mt-8 flex justify-center flex-col items-center">
          <div className="w-full border-t-2 border-gray-300"></div>
          <div className="flex justify-center items-center space-x-4 pt-6">

            <Link to="/about">
            <button className="footer-a px-8 py-2 mr-8 border-2 text-xs border-gray-300 text-gray-500 rounded-lg hover:bg-gray-100 transition duration-300">
              about
            </button>
            </Link>

            <Link to="/calendar">
              <button className="footer-b px-6 py-2 mr-8 border-2 text-xs border-gray-300 text-gray-500 rounded-lg hover:bg-gray-100 transition duration-300">
                calendar
              </button>
            </Link>

            <Link to="/anniversary">
            <button className="footer-b px-6 py-2 border-2 text-xs border-gray-300 text-gray-500 rounded-lg hover:bg-gray-100 transition duration-300">
              anniversary
            </button>
            </Link>
            
            <Link to="/">
              <button className="footer-a px-6 py-2 ml-8 border-2 text-xs border-gray-300 text-gray-500 rounded-lg hover:bg-gray-100 transition duration-300">
                home
              </button>
            </Link>
          </div>
          <div className="low pt-5 text-sm text-gray-300">
            <p>(made with love)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
