import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Calendar2023 from './2023';
import Calendar2024 from './2024';
import Calendar2025 from './2025';
import Event from './Event'; // Import Event component
import './Calendar.css'

const Calendar = () => {
  const [currentYear, setCurrentYear] = useState(2023);
  const [dateInput, setDateInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleYearChange = (direction) => {
    if (direction === 'previous' && currentYear > 2023) {
      setCurrentYear(currentYear - 1);
    } else if (direction === 'next' && currentYear < 2025) {
      setCurrentYear(currentYear + 1);
    }
  };

  const handleDateChange = (e) => {
    setDateInput(e.target.value);
  };

  const applyDate = () => {
    if (dateInput) {
      const date = new Date(dateInput);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
  
      // Format the date as MM/DD/YY to match the format in the events object
      const dateKey = `${month}/${day}/${year.toString().substring(2)}`;
  
      if (!isNaN(date.getTime()) && (year === 2023 || year === 2024 || year === 2025)) {
        setSelectedDate(dateKey); // Set selected date for the Event component
        setErrorMessage('');
        setCurrentYear(year);
      } else {
        setErrorMessage('Please enter a valid date (MM/DD/YY) within 2023-2025.');
        setSelectedDate('');
      }
    } else {
      setErrorMessage('Please select a date.');
      setSelectedDate('');
    }
  };
  

  const clearDate = () => {
    setDateInput('');
    setErrorMessage('');
    setSelectedDate('');
  };

  const renderCalendar = () => {
    switch (currentYear) {
      case 2023:
        return <Calendar2023 />;
      case 2024:
        return <Calendar2024 />;
      case 2025:
        return <Calendar2025 />;
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-image">
      <div className="w-1/2 bg-white rounded-md solid-shadow overflow-hidden relative">
        <div className="bg-red-800 text-white p-4 text-center">
          <h2 className="text-2xl font-shrikhand">Our Love's Timeline</h2>
        </div>

        <div className="p-2">{renderCalendar()}</div>

        <div className="flex justify-between items-center py-4 px-4">
          <div className="flex items-center space-x-2">
            <input
              type="date"
              value={dateInput}
              onChange={handleDateChange}
              className="px-3 py-1 text-sm border-2 rounded-md"
            />
            <button
              onClick={applyDate}
              className="px-3 py-1 text-sm text-white bg-blue-700 rounded-md hover:bg-blue-900 transition duration-300"
            >
              Apply
            </button>
            <button
              onClick={clearDate}
              className="px-3 py-1 text-sm text-white bg-red-700 rounded-md hover:bg-red-900 transition duration-300"
            >
              Clear
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleYearChange('previous')}
              className="px-3 py-1 rounded-l-lg text-sm hover:shadow-lg transition duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M220-240v-480h80v480h-80Zm520 0L380-480l360-240v480Zm-80-240Zm0 90v-180l-136 90 136 90Z"/></svg>
            </button>
            <div className="flex space-x-2">
              {[2023, 2024, 2025].map((year) => (
                <div
                  key={year}
                  onClick={() => setCurrentYear(year)}
                  className={`cursor-pointer px-3 py-1 text-xs border-2 rounded-md ${
                    currentYear === year ? 'bg-blue-700 text-white' : 'bg-white text-gray-500'
                  }`}
                >
                  {year}
                </div>
              ))}
            </div>
            <button
              onClick={() => handleYearChange('next')}
              className="px-3 py-1 rounded-r-lg text-sm hover:shadow-lg transition duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M660-240v-480h80v480h-80Zm-440 0v-480l360 240-360 240Zm80-240Zm0 90 136-90-136-90v180Z"/></svg>
            </button>
          </div>
        </div>

        {errorMessage && (
          <div className="text-red-500 text-center text-sm py-1">{errorMessage}</div>
        )}

        {selectedDate && <Event date={selectedDate} />}

        <div className="p-4 flex justify-center flex-col items-center">
          <div className="w-full border-t-2 border-gray-300"></div>
          <div className="flex justify-center items-center space-x-4 pt-6">

            <Link to="/about">
            <button className="px-10 py-2 mr-8 border-2 text-xs border-gray-300 text-gray-500 rounded-lg hover:bg-gray-100 transition duration-300">
              about
            </button>
            </Link>

            <Link to="/calendar">
              <button className="px-9 py-2 mr-8 border-2 text-xs border-gray-300 text-gray-500 rounded-lg hover:bg-gray-100 transition duration-300">
                calendar
              </button>
            </Link>

            <Link to="/anniversary">
            <button className="px-9 py-2 border-2 text-xs border-gray-300 text-gray-500 rounded-lg hover:bg-gray-100 transition duration-300">
              anniversary
            </button>
            </Link>
            
            <Link to="/">
              <button className="px-10 py-2 ml-8 border-2 text-xs border-gray-300 text-gray-500 rounded-lg hover:bg-gray-100 transition duration-300">
                home
              </button>
            </Link>
          </div>
          <div className="pt-5 text-sm text-gray-300">
            <p>(made with love)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
