import React from 'react';
import './App.css';

//Importing the API
import { fetchWeather } from "./api/fetchWeather";

const App = () => {
  return (
      <div className="main-container">
        <input
            type="text"
            className="search"
            placeholder="Search..."
            value={}
            onChange={}
        />
      </div>
  );
}

export default App;
