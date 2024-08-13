import React from 'react'

export const fetchData = () => {
    const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/status',
  headers: {
    'x-rapidapi-key': 'd2ce31a9e0msh53a8d38b4263149p10729fjsna1d0f9e7405f',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};

try {
	const response = axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

  return (
    <div>
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="homee">Home</a>
        </li>
        <li className="nav-item">
          <a href="/Plan" className="wwe">Plan</a>
        </li>
        <li class="nav-item">
          <a href="/trainer" class="wwf">Tracker</a>
        </li>
        <li className="nav-item">
          <a href="/bmi" className="wwe">Bmi</a>
        </li>
        <li className="nav-item">
          <a href="/addwork" className="wwe">Add workout</a>
        </li>
        <li className="nav-item">
          <a href="/about" className="wwe">About</a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="wwf">Contact us</a>
        </li>
      </ul>
    </nav>
  </div>
  )
}
