import React from 'react';
import './TimeConverter.css';

const TimeConverter = ({ indianTime, selectedCountries }) => {
  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { hour12: true });
  };

  const convertTime = (offset) => {
    const convertedTime = new Date(indianTime.getTime() + offset * 3600 * 1000);
    return formatTime(convertedTime);
  };

  return (
    <div className="time-converter">
      <div className="time-card indian-time">
        <h2>Indian Time</h2>
        <p>{formatTime(indianTime)}</p>
      </div>
      <div className="time-grid">
        {selectedCountries.map((country, index) => (
          <div key={index} className="time-card">
            <h3>{country.name}</h3>
            <p>{convertTime(country.offset)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeConverter;
