import React from 'react';
import e1 from './assets/e1.jpg';

// Events object with key-value pairs for dates and events
const events = {
    // 2023 Events
    '01/01/23': 'New Year Celebration!',
    '02/14/23': 'Valentine’s Day',
    '03/23/23': 'Dexter’s Birthday',
    '04/13/23': 'We Started Talking',
    '07/09/23': 'We Started Going Out (Church Date & McDonald’s)',
    '08/27/23': 'Anniversary!',
    '11/07/23': 'Rica’s Birthday Day',
    '12/25/23': 'Christmas Celebration!',
    '09/27/23': 'Monthsary',
    '10/27/23': 'Monthsary',
    '11/27/23': 'Monthsary',
    '12/27/23': 'Monthsary',
  
    // 2024 Events
    '01/01/24': 'New Year Celebration!',
    '02/14/24': 'Valentine’s Day',
    '03/23/24': 'Dexter’s Birthday',
    '08/27/24': 'Anniversary!',
    '11/07/24': 'Rica’s Birthday Day',
    '09/27/24': 'Monthsary',
    '10/27/24': 'Monthsary',
    '11/27/24': 'Monthsary',
    '12/27/24': 'Monthsary',
    '01/27/24': 'Monthsary',
    '02/27/24': 'Monthsary',
    '03/27/24': 'Monthsary',
    '04/27/24': 'Monthsary',
    '05/27/24': 'Monthsary',
    '06/27/24': 'Monthsary',
    '07/27/24': 'Monthsary',
    '12/25/24': 'Christmas Celebration!',
  
    // 2025 Events (Same as 2024)
    '01/01/25': 'New Year Celebration!',
    '02/14/25': 'Valentine’s Day',
    '03/23/25': 'Dexter’s Birthday',
    '08/27/25': 'Anniversary!',
    '11/07/25': 'Rica’s Birthday Day',
    '09/27/25': 'Monthsary',
    '10/27/25': 'Monthsary',
    '11/27/25': 'Monthsary',
    '12/27/25': 'Monthsary',
    '01/27/25': 'Monthsary',
    '02/27/25': 'Monthsary',
    '03/27/25': 'Monthsary',
    '04/27/25': 'Monthsary',
    '05/27/25': 'Monthsary',
    '06/27/25': 'Monthsary',
    '07/27/25': 'Monthsary',
    '12/25/25': 'Christmas Celebration!',
  };
   

const Event = ({ date }) => {
  const event = events[date]; // Find the event for the selected date

  return (
    <div className="p-6 m-4 shadow-xl bg-red-800 mx-auto transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col justify-center items-center">
      <h3 className="text-xl font-semibold text-white text-center mb-4">
        Event on {date || 'Selected Date'}
      </h3>
  
      <div className="p-2 w-1/2 flex justify-center items-center bg-white rounded-full shadow-md">
        {event ? (
          <p className="text-mid text-gray-700 text-center font-shrikhand">{event}</p>
        ) : (
          <p className="text-sm text-gray-700 text-center">
            No events scheduled for this date. Check back soon!
          </p>
        )}
      </div>
  
      <p className="text-xs text-white text-center mt-4">
        Keep the memories alive and celebrate every moment with love!
      </p>
    </div>
  );  
    
};

export default Event;
