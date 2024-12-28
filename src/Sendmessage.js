import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com'; // Import emailjs-com
import './Sendmessage.css';

const Sendmessage = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(''); // Store message
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [modalVisible, setModalVisible] = useState(false); // Modal visibility state
  const [modalMessage, setModalMessage] = useState(''); // Modal message
  const [sentMessage, setSentMessage] = useState(''); // Store the sent message
  const [isEmailSent, setIsEmailSent] = useState(false); // Email sent state

  useEffect(() => {
    // Initialize EmailJS with the public key
    emailjs.init('667URHcBarTCG4wFW'); // Your public key
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem('authenticated') !== 'true') {
      navigate('/login');
    }
  }, [navigate]);

  const handleSendMessage = (e) => {
    e.preventDefault();

    // Check if message is empty or only contains whitespaces
    if (message.trim() === '') {
      setModalMessage('Please enter a message.');
      setModalVisible(true); // Show modal with error message
      return;
    }

    setIsLoading(true); // Start loading

    // Send the email using EmailJS
    const params = {
      from_name: 'My Love', // Name to send with the message (this can be dynamic if needed)
      message: message.trim(), // Trim the message to remove leading/trailing spaces
    };

    emailjs
      .send(
        'service_gvj6emv', // Your EmailJS service ID
        'template_fqx63kb', // Your EmailJS template ID
        params
      )
      .then(
        (response) => {
          console.log('Message sent successfully:', response);
          setModalMessage('Message sent successfully!');
          setSentMessage(message); // Save the sent message
          setIsEmailSent(true); // Mark email as sent
          setIsLoading(false); // Stop loading
          setMessage(''); // Clear message input
          setModalVisible(true); // Show modal with success message
        },
        (error) => {
          console.error('Error sending email:', error);
          setModalMessage('Something went wrong. Please try again later.'); // Error message
          setIsLoading(false); // Stop loading
          setModalVisible(true); // Show modal with error message
        }
      );
  };

  // Close modal function
  const closeModal = () => {
    setModalVisible(false); // Hide modal
  };

  return (
    <div className="relative">
      <div className="p-4">
        <div className="text-center mb-6">
          <h2 className="Messtext text-2xl font-shrikhand text-purple-700">Send a Message</h2>
          <p className="Messdesc text-gray-600 text-sm">Magsend ka ng message sa akin. Kapag hindi, hindi mo me love!</p>
        </div>
        <form onSubmit={handleSendMessage} className="space-y-6">
          {/* Message Box with Integrated Button */}
          <div className="relative text-white rounded-lg">
            {/* Textarea */}
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              className="textmessa w-full font-sometype p-4 bg-gray-800 text-white rounded-t-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
              rows="2"
              style={{
                borderBottomLeftRadius: '0',
                borderBottomRightRadius: '0',
              }}
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="buttonmess w-full bg-purple-500 text-white py-3 font-semibold rounded-b-lg hover:bg-purple-700 transition-all"
              disabled={isLoading} // Disable button while loading
            >
              {isLoading ? 'Sending...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>

      {/* Modal for Success/Error message */}
      {modalVisible && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <h3 className="text-mid font-shrikhand text-center text-gray-800 mb-4">
              {modalMessage}
            </h3>

            {/* Display the sent message only when email is successfully sent */}
            {isEmailSent && sentMessage && (
              <div className="text-sm text-gray-700 mt-4">
                <p className="font-medium mb-2">Your message:</p>
                <p className="bg-gray-100 p-2 rounded-md text-black font-sometype">{sentMessage}</p>
              </div>
            )}

            <div className="mt-4 text-center">
              <button
                onClick={closeModal}
                className="bg-purple-500 text-white px-6 py-1 rounded-lg hover:bg-purple-700 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sendmessage;
