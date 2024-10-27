import React, { useState, useEffect } from 'react';
import './App.css';
import TimeConverter from './components/TimeConverter';
import CountrySelector from './components/CountrySelector';

function App() {
  const [indianTime, setIndianTime] = useState(new Date());
  const [selectedCountries, setSelectedCountries] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndianTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Indian Time Converter</h1>
      </header>
      <main>
        <CountrySelector 
          selectedCountries={selectedCountries} 
          setSelectedCountries={setSelectedCountries} 
        />
        <TimeConverter 
          indianTime={indianTime} 
          selectedCountries={selectedCountries} 
        />
      </main>
      <footer>
        <p>&copy; 2023 Time Converter App</p>
      </footer>
    </div>
  );
}

export default App;
