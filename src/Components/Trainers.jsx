import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Trainers.css';

const Trainers = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [waterIntake, setWaterIntake] = useState(null);
  const [workoutSuggestion, setWorkoutSuggestion] = useState('');
  const [runningTarget, setRunningTarget] = useState('');
  const [distance, setDistance] = useState('');
  const [time, setTime] = useState('');
  const [caloriesBurnt, setCaloriesBurnt] = useState(null);
  const [sleepLevel, setSleepLevel] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateWaterIntake = () => {
    const intake = weight * 55;
    setWaterIntake(intake);
  };

  const suggestWorkout = () => {
    const workouts = ["20 push-ups", "30 squats", "15 minutes of yoga", "10 burpees"];
    const randomWorkout = workouts[Math.floor(Math.random() * workouts.length)];
    setWorkoutSuggestion(randomWorkout);
  };

  const setRunningGoal = () => {
    const target = Math.floor(Math.random() * 3000) + 1000; // Random target between 1000 and 4000 meters
    setRunningTarget(target);
  };

  const calculateCaloriesBurnt = () => {
    const calories = (distance * 0.5) + (time * 5);
    setCaloriesBurnt(calories);
  };

  const calculateBmi = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
    }
  };

  return (
    <div className="container">
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="wwe">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/Plan" className="wwe">Plan</Link>
          </li>
          <li className="nav-item">
            <a href="/trainer" className="wwf">Tracker</a>
          </li>
          <li className="nav-item">
            <a href="/About" className="wwe">About</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="wwf">Contact us</a>
          </li>
        </ul>
      </nav>

      <div className="input-container">
        <input 
          type="number" 
          placeholder="Weight (kg)" 
          value={weight} 
          onChange={(e) => setWeight(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Height (cm)" 
          value={height} 
          onChange={(e) => setHeight(e.target.value)} 
        />
      </div>

      <h2 className="title">Our Suggestions</h2>

      <div className="scrollable-container">
        <div className="cards-container">
          <div className="card">
            <h3 className='wl'>Water Level</h3>
            <p>Check your water intake</p>
            <button className="enter-button" onClick={calculateWaterIntake}>Check</button>
            {waterIntake && (
              <p className="result">
                You should drink approximately {waterIntake} ml of water daily to stay healthy.
              </p>
            )}
          </div>
          <div className="card">
            <h3 className='wl'>Running Level</h3>
            <p>Track your running progress</p>
            <button className="enter-button" onClick={setRunningGoal}>Check</button>
            {runningTarget && (
              <p className="result">
                Your running target for today is {runningTarget} meters.
              </p>
            )}
          </div>
          <div className="card">
            <h3 className='wl'>Fat Content</h3>
            <p>Monitor your fat content</p>
            <button className="enter-button" onClick={suggestWorkout}>Check</button>
            {workoutSuggestion && (
              <p className="result">
                Suggested workout for today: {workoutSuggestion}
              </p>
            )}
          </div>
        </div>

        <h2 className="title">Alter your day manually</h2>

        <div className="cards-container">
          <div className="card">
            <h3 className='wl'>Calories Burnt</h3>
            <input 
              type="number" 
              placeholder="Distance (km)" 
              value={distance} 
              onChange={(e) => setDistance(e.target.value)} 
            />
            <input 
              type="number" 
              placeholder="Time (min)" 
              value={time} 
              onChange={(e) => setTime(e.target.value)} 
            />
            <button className="enter-button" onClick={calculateCaloriesBurnt}>Check</button>
            {caloriesBurnt && (
              <p className="result">
                You have burnt approximately {caloriesBurnt} calories.
              </p>
            )}
          </div>
          <div className="card">
            <h3 className='wl'>BMI</h3>
            <button className="enter-button" onClick={calculateBmi}>Calculate BMI</button>
            {bmi && (
              <p className="result">
                Your BMI is {bmi}.
              </p>
            )}
          </div>
          <div className="card">
            <h3 className='wl'>Sleep Level</h3>
            <input 
              type="text" 
              placeholder="Sleep Level" 
              value={sleepLevel} 
              onChange={(e) => setSleepLevel(e.target.value)} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trainers;
