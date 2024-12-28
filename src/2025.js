import React from 'react';
import { Link } from 'react-router-dom';
import c1 from './assets/c1.jpg';
import c2 from './assets/c2.jpg';
import c3 from './assets/c3.jpg';
import c4 from './assets/c4.jpg';
import c5 from './assets/c5.jpg';
import c6 from './assets/c6.jpg';
import c7 from './assets/c7.jpg';
import c8 from './assets/c8.jpg';
import c9 from './assets/c9.jpg';
import c10 from './assets/c10.jpg';
import c11 from './assets/c11.jpg';
import c12 from './assets/c12.jpg';

const Cal2025 = () => {
  const generateCalendar = (month, year) => {
    const daysInMonth = new Date(year, month, 0).getDate();
    const firstDay = new Date(year, month - 1, 1).getDay();
    const weeks = [];
    let currentWeek = Array(7).fill('');
    let day = 1;

    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          currentWeek[j] = '';
        } else if (day > daysInMonth) {
          currentWeek[j] = '';
        } else {
          currentWeek[j] = day++;
        }
      }
      if (currentWeek.some(cell => cell !== '')) {
        weeks.push(currentWeek);
      }
      currentWeek = Array(7).fill('');
    }

    return weeks;
  };

  const renderMonthCalendar = (month, year) => {
    const weeks = generateCalendar(month, year);
  
    const getDateClass = (month, day) => {
      if ((month === 1 && day === 1) || (month === 12 && day === 25)) return 'bg-red-500 text-white';
      if (month === 2 && day === 14) return 'bg-red-500 text-white'; // Red: February 14
      if (month === 3 && day === 23) return 'bg-yellow-500 text-white'; // Yellow: March 23
      if (month === 11 && day === 7) return 'bg-yellow-500 text-white'; // Yellow: November 7
      if (month === 1 && day === 27) return 'bg-violet-500 text-white';
      if (month === 2 && day === 27) return 'bg-violet-500 text-white';
      if (month === 3 && day === 27) return 'bg-violet-500 text-white';
      if (month === 4 && day === 27) return 'bg-violet-500 text-white';
      if (month === 5 && day === 27) return 'bg-violet-500 text-white';
      if (month === 6 && day === 27) return 'bg-violet-500 text-white';
      if (month === 7 && day === 27) return 'bg-violet-500 text-white';
      if (month === 8 && day === 27) return 'bg-green-500 text-white';
      if (month === 9 && day === 27) return 'bg-violet-500 text-white'; // Violet: September 27
      if (month === 10 && day === 27) return 'bg-violet-500 text-white'; // Violet: October 27
      if (month === 11 && day === 27) return 'bg-violet-500 text-white'; // Violet: November 27
      if (month === 12 && day === 27) return 'bg-violet-500 text-white'; // Violet: December 27
      return 'bg-gray-100'; // Default: Gray
    };
  
    return (
      <table className="text-center items-center text-xs border-collapse">
        <thead>
          <tr>
            <th className="p-1 w-1/7 bg-gray-200">S</th>
            <th className="p-1 w-1/7 bg-gray-200">M</th>
            <th className="p-1 w-1/7 bg-gray-200">T</th>
            <th className="p-1 w-1/7 bg-gray-200">W</th>
            <th className="p-1 w-1/7 bg-gray-200">T</th>
            <th className="p-1 w-1/7 bg-gray-200">F</th>
            <th className="p-1 w-1/7 bg-gray-200">S</th>
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, index) => (
            <tr key={index}>
              {week.map((day, idx) => (
                <td key={idx} className="p-1 border text-xs">
                  {day !== '' && (
                    <div
                      className={`datecal w-4 h-4 rounded-full flex justify-center items-center mx-auto ${getDateClass(month, day)}`}
                    >
                      {day}
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  
  return (
    <div className="w-full overflow-hidden">
      <div className="titbox text-center pt-4">
        <h2 className="tittext text-xl font-shrikhand">2025</h2>
      </div>

      <div className="contbox flex space-x-2 overflow-x-auto pt-4">
        {[c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12].map((image, index) => (
          <div key={index} className="flex-1 border-2 border-gray-300 rounded-md p-1 mx-auto transform transition duration-300 hover:scale-105">
            <div className="calmon mb-2 text-center text-sm text-gray-700 font-shrikhand">
              {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][index]}
            </div>
            <div className="mb-2">
              <img src={image} alt={`c${index + 1}`} className="calimage w-full h-20 object-cover rounded-md" />
            </div>
            <div className="flex justify-center">
              {renderMonthCalendar(index + 1, 2025)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cal2025;
