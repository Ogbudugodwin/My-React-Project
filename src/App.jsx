import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { ThemeContext } from "./ThemeContext";
import CountryCard from "./CountryCard";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    axios.get("data.json")  // Load from local JSON
      .then((res) => setCountries(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase()) &&
    (region === "" || country.region === region)
  );

  return (
    <div className={`app ${theme}`}>
      <header>
        <h1>Where in the world?</h1>
        <button onClick={toggleTheme}>Dark Mode</button>
      </header>

      <div className="controls">
        <input
          type="text"
          placeholder="Search for a country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select onChange={(e) => setRegion(e.target.value)}>
        <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div className="grid">
        {filteredCountries.map((country) => (
          <CountryCard key={country.name} country={country} />
        ))}
      </div>
    </div>
  );
};

export default App
