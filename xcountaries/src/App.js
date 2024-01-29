import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        const countriesData = data.map(country => ({
          name: country.name.common,
          flag: country.flags.png
        }));
       
        setCountries(countriesData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Run once on component mount

  return (
    <div className="App">
      <div className="grid">
        {/* Map through countries array and create a card for each country */}
        {countries.map((country, index) => (
          <div className="country" key={index}>
            <img src={country.flag} alt={country.name} width="100" />
            <p>{country.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
