// LoadingPage.js
import React from 'react';

const LoadingPage = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-75 z-50">
      <div className="flex flex-col items-center">
        <div className="spinner-border animate-spin border-4 border-t-4 border-purple-500 w-16 h-16 rounded-full"></div>
        <p className="mt-4 text-gray-700">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
