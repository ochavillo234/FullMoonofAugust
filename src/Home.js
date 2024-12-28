import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

import './Home.css';  // Import the CSS file for animations

import profile from './assets/p1.jpg';

// Import the images from your assets folder
import image1 from './assets/d1.jpg';
import image2 from './assets/d2.jpg';
import image3 from './assets/d3.jpg';
import image4 from './assets/d4.jpg';
import image5 from './assets/d5.jpg';
import informationIcon from './assets/information.png'; // Import the "information.png" icon

const images = [image1, image2, image3, image4, image5];
const imageDescriptions = [
  { title: 'Ayala Malls Gala', text: '2nd time to agala in Ayala Malls Vermosa but first time in the Christmas Show.' },
  { title: 'Photobooth', text: '1st Anniversary and 1st Photobooth.' },
  { title: 'Tagaytay', text: 'Christmas season gala and 16th months of love.' },
  { title: 'Mirror Shoot', text: '1st Anniversary and 1st time exploring Manila.' },
  { title: 'HHWW', text: 'We are so sipag to go school together.' },
];


const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [overlayVisible, setOverlayVisible] = useState(false); // Track visibility of the overlay
  const [isPlaying, setIsPlaying] = useState(true); // Track the play/pause state
  const [fade, setFade] = useState(false);
  const [comment, setComment] = useState('');
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); // Tracks modal visibility
  const [modalMessage, setModalMessage] = useState(''); // Tracks modal text message
  const [lastSentComment, setLastSentComment] = useState('');

  const sendComment = () => {
    if (comment.trim() === '') {
      setModalMessage('Please enter the message.');
      setIsMessageSent(false); // No message was sent
      setModalVisible(true); // Show modal with error
      return; // Don't send empty comments
    }
    const templateParams = {
      from_name: 'Unknown User', // Default name
      message: comment,
    };
  
    emailjs
      .send(
        'service_gvj6emv', // Your EmailJS service ID
        'template_fqx63kb', // Your EmailJS template ID
        templateParams
      )
      .then((response) => {
        setModalMessage('Comment sent successfully!');
        setIsMessageSent(true); // Message was sent successfully
        setModalVisible(true); // Show modal with success message
        setLastSentComment(comment); // Save the sent comment
        setComment(''); // Clear the comment box after successful submission
      })
      .catch((error) => {
        setModalMessage('Failed to send your comment. Please try again.');
        setIsMessageSent(false); // Message failed to send
        setModalVisible(true); // Show modal with failure message
      });
  };
  

  useEffect(() => {
    // Initialize EmailJS with the public key
    emailjs.init('667URHcBarTCG4wFW'); // Your public key
  }, []);

  useEffect(() => {
    let intervalId;

    if (isPlaying) {
      // Start the slideshow if playing
      intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    }

    return () => clearInterval(intervalId); // Clear interval on unmount or when paused
  }, [isPlaying]);

  useEffect(() => {
    // Reset fade effect after animation duration (3000ms)
    if (fade) {
      const timer = setTimeout(() => setFade(false), 1000); // Reset fade after 1 second
      return () => clearTimeout(timer);
    }
  }, [fade]);

  // Toggle the visibility of the overlay
  const handleInfoClick = (e) => {
    e.stopPropagation(); // Prevent the event from propagating to the overlay
    setOverlayVisible(!overlayVisible); // Toggle overlay visibility
  };

  // Hide overlay when clicking on the overlay itself
  const handleOverlayClick = () => {
    setOverlayVisible(false); // Hide the overlay when clicked
  };

  // Handle play/pause button click
  const handlePlayPauseClick = () => {
    setIsPlaying(!isPlaying); // Toggle between play and pause
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-pattern">
      <div className="overall w-1/3 bg-white rounded-md solid-shadow overflow-hidden relative">
        <div className="bg-white p-4 text-black flex justify-center items-center relative">
          {/* Info button with "information.png" positioned at the top left of the image */}
          <button
            onClick={handleInfoClick}
            className="sinfo absolute top-6 left-6 bg-transparent border-none cursor-pointer Hover:bg-gray-300 hover:scale-110 hover:shadow-lg p-2 rounded-full transition-all"
          >
            <img
              src={informationIcon} // The path to your image
              alt="Information"
              className="info w-5 h-5" // Adjust the size of the icon (smaller size)
            />
          </button>

          {/* Play/Pause button positioned on the right */}
          <button
            onClick={handlePlayPauseClick}
            className="pp absolute top-6 right-6 bg-transparent border-none cursor-pointer Hover:bg-gray-300 hover:scale-110 hover:shadow-lg p-2 rounded-full transition-all"
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="playpause" height="24px" viewBox="0 -960 960 960" width="24px" fill="undefined"><path d="M320-320h320v-320H320v320ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="playpause" height="24px" viewBox="0 -960 960 960" width="24px" fill="undefined"><path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
            )}
          </button>

          {/* Display only the current image */}{/* Display only the current image */}
          <div className="relative w-full h-auto">
      {/* Display only the current image */}
      <img
        src={images[currentImageIndex]}
        alt={`Astrocane image ${currentImageIndex + 1}`}
        className={`w-full max-w-full h-auto object-cover rounded-md transition-all duration-1000 ease-in-out ${
          fade ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-10'
        }`}
        style={{
          opacity: fade ? 1 : 0, // Dynamically update opacity based on fade state
          transform: fade ? 'translateX(0)' : 'translateX(10px)', // Apply slide-in effect
        }}
      />
      </div>

          <img
            src={images[currentImageIndex]}
            alt={`Astrocane image ${currentImageIndex + 1}`}
            className="w-full max-w-full h-auto object-cover rounded-md"
          />

          {/* Overlay with description */}
          {overlayVisible && (
            <div
              className={`absolute bottom-0 left-0 mb-4 ml-4 mr-4 h-1/2 bg-black bg-opacity-50 text-white flex justify-center items-center text-center p-4 rounded-lg cursor-pointer transition-transform duration-500 ease-in-out transform ${
                overlayVisible ? 'slide-up' : 'slide-down'
              }`}
              style={{
                width: 'calc(100% - 2rem)', // Subtracts left (4 units) and right (4 units) margins
              }}
              onClick={handleOverlayClick} // Close overlay when clicked
            >
              <div className="text-center">
                <h2 className="title text-2xl mb-2 font-shrikhand">{imageDescriptions[currentImageIndex].title}</h2>
                <p className="desc text-sm">{imageDescriptions[currentImageIndex].text}</p>
              </div>
            </div>
          )}

          {/* Dots for active image, positioned at the bottom of the image */}
          {!overlayVisible && (
            <div className="absolute pb-2 bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
              {images.map((_, index) => (
                <button
                key={index}
                className={`dots relative w-3 h-3 rounded-full cursor-pointer overflow-hidden transition-all duration-300 ease-in-out ${
                  index === currentImageIndex
                    ? 'bg-gray-300 shadow-md scale-110 w-10'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`Select image ${index + 1}`}
              >
                {index === currentImageIndex && (
                  <div
                    className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-blue-900 to-blue-600"
                    style={{
                      animation: `fillEffect 3000ms linear`,
                    }}
                  ></div>
                )}
              </button>
              ))}
            </div>
          )}
        </div>

{/* Middle Container with Circle and Message Box */}
<div className="bg-white text-black flex items-center justify-center pl-4 pr-4 w-full">
  <div className="first flex items-center space-x-4 pr-6">
    <div className="relative">
      <div className="profile w-16 h-16 rounded-full border-2 border-blue-700 flex justify-center items-center overflow-hidden p-1">
        <div className="w-full h-full rounded-full overflow-hidden">
          <img
            src={profile} // Replace with the image of your choice
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  </div>

  <div className="flex items-center justify-center text-center w-9/12">
    <div className="relative w-full">
      <textarea
        placeholder="Type your comments here..."
        value={comment}  // Bind the textarea to the comment state
        onChange={(e) => setComment(e.target.value)}
        className="commentbox comments flex items-center justify-center p-2 py-2 text-sm rounded-xl border border-blue-500 bg-gray-100 focus:bg-white focus:ring-1 focus:ring-blue-700 focus:outline-none shadow-sm w-full pl-4 pr-12 text-gray-800 placeholder-gray-400 transition-all duration-300 resize-none h-10"
      />
      <button
        className="sendcomment absolute right-1 top-1/2 transform -translate-y-1/2 flex items-center justify-center p-1 rounded-r-lg bg-blue-700 hover:bg-indigo-900 shadow-lg transition-all duration-300"
        onClick={sendComment} // Replace with your message handling logic
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#FFFFFF"><path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/></svg>
      </button>
    </div>
  </div>
</div>

{modalVisible && (
  <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h3 className="text-mid font-semibold font-poppins text-center text-gray-800 mb-4">
        {modalMessage}
      </h3>

      {/* Display the sent message if successfully sent */}
      {isMessageSent && lastSentComment && (
        <div className="text-sm text-gray-700 mt-4">
          <p className="font-medium mb-2">Your comment:</p>
          <p className="bg-gray-100 p-2 rounded-md text-black font-sometype">{lastSentComment}</p>
        </div>
      )}

      <div className="mt-4 text-center">
        <button
          onClick={() => setModalVisible(false)} // Close modal
          className="bg-blue-700 text-white px-6 py-1 text-sm rounded-lg hover:bg-blue-900 transition-all"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}

        <div className="p-4 flex justify-center flex-col items-center">
          <div className="w-full border-t-2 border-gray-300"></div>
            <div className="flex justify-center items-center space-x-4 pt-6">

              <Link to="/about">
              <button className="footer px-7 py-2 border-2 text-xs border-gray-300 text-gray-500 rounded-lg hover:bg-gray-100 transition duration-300">
                about
              </button>
              </Link>
              
              {/* Link to Calendar Page */}
              <Link to="/calendar">
                <button className="footer px-7 py-2 border-2 text-xs border-gray-300 text-gray-500 rounded-lg hover:bg-gray-100 transition duration-300">
                  calendar
                </button>
              </Link>

            <Link to='/anniversary'>
              <button className="footer px-7 py-2 border-2 text-xs border-gray-300 text-gray-500 rounded-lg hover:bg-gray-100 transition duration-300">
                anniversary
              </button>
            </Link>

            <Link to='/'>
            <button className="footer px-7 py-2 border-2 text-xs border-gray-300 text-gray-500 rounded-lg hover:bg-gray-100 transition duration-300">
              home
            </button>
            </Link>

            </div>
            <div className='low pt-5 text-sm text-gray-300'>
              <p className='markings'>(made with love)</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Home;
