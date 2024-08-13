import React, { useState } from 'react';
import axios from 'axios';
import './About.css';

const Bmi = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [error, setError] = useState(null);

  const fetchBmiData = async () => {
    const options = {
      method: 'POST',
      url: 'https://bmi.p.rapidapi.com/v1/bmi',
      headers: {
        'x-rapidapi-key': 'd2ce31a9e0msh53a8d38b4263149p10729fjsna1d0f9e7405f',
        'x-rapidapi-host': 'bmi.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      data: {
        weight: {
          value: weight,
          unit: 'kg'
        },
        height: {
          value: height,
          unit: 'cm'
        },
       
      }
    };

    try {
      const response = await axios.request(options);
      console.log('API response:', response.data); 
      const apiBmiValue = response.data.bmi.value; 
      setBmi(apiBmiValue);
      setError(null);
    } catch (error) {
      console.error('Error fetching BMI data:', error);
      setError('');
    }
  };

  const calculateBmiDirectly = () => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    return bmiValue.toFixed(2);
  };

  const handleCheck = (e) => {
    e.preventDefault();
    const directBmi = calculateBmiDirectly();
    setBmi(directBmi);
    fetchBmiData();
  };

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
          <li className="nav-item">
            <a href="/trainer" className="wwf">Tracker</a>
          </li>
          <li className="nav-item">
            <a href="/bmi" className="wwe">Bmi</a>
          </li>
          <li className="nav-item">
            <a href="/addwork" className="wwe">Add workouts</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="wwe">About</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="wwf">Contact us</a>
          </li>
        </ul>
      </nav>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className="card" style={{ padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h1>Check Your BMI</h1>
          <form onSubmit={handleCheck}>
            <div className="form-group">
              <label htmlFor="height">Height (cm):</label>
              <input
                type="number"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="weight">Weight (kg):</label>
              <input
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="check-button">
              Check
            </button>
          </form>
          {bmi !== null && (
            <div className="bmi-result">
              <h2>Your BMI</h2>
              <p>{bmi}</p>
            </div>
          )}
          {error && (
            <div className="error-message">
              <p>{error}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bmi;
