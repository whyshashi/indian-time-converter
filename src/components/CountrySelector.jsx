import React from 'react';
import './CountrySelector.css';

const CountrySelector = ({ selectedCountries, setSelectedCountries }) => {
  const allCountries = [
    { name: 'USA (New York)', offset: -9.5 },
    { name: 'UK (London)', offset: -4.5 },
    { name: 'Japan (Tokyo)', offset: 3.5 },
    { name: 'Australia (Sydney)', offset: 4.5 },
    { name: 'Germany (Berlin)', offset: -3.5 },
    { name: 'Brazil (São Paulo)', offset: -8.5 },
    { name: 'South Africa (Johannesburg)', offset: -3.5 },
    { name: 'Canada (Toronto)', offset: -9.5 },
    { name: 'China (Beijing)', offset: 2.5 },
    { name: 'France (Paris)', offset: -3.5 },
    { name: 'Mexico (Mexico City)', offset: -10.5 },
    { name: 'Russia (Moscow)', offset: -1.5 },
  ];

  const handleCountryToggle = (country) => {
    if (selectedCountries.some(c => c.name === country.name)) {
      setSelectedCountries(selectedCountries.filter(c => c.name !== country.name));
    } else {
      setSelectedCountries([...selectedCountries, country]);
    }
  };

  return (
    <div className="country-selector">
      <h2>Select Countries</h2>
      <div className="country-list">
        {allCountries.map((country, index) => (
          <button
            key={index}
            className={`country-button ${selectedCountries.some(c => c.name === country.name) ? 'selected' : ''}`}
            onClick={() => handleCountryToggle(country)}
          >
            {country.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CountrySelector;