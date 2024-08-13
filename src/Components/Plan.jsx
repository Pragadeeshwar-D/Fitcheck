import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Plan.css'; 
import img1 from './womenjog.jpg';
import img2 from './homeworkout.avif';
import img3 from './gymbro.png';

const Plan = () => {
  const navigate = useNavigate();

  const handleHomeWorkoutNavigation = () => {
    navigate('/homework');
  };

  const handleCardioNavigation = () => {
    navigate('/proj');
  };
  const handlegymNavigation = () => {
    navigate('/gym');
  };

  return (
    <div className="plan-container">
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link> 
          </li>
          <li className="nav-item">
            <Link to="/plan" className="nav-link">Plan</Link>
          </li>
          <li className="nav-item">
            <Link to="/trainer" className="nav-link">Tracker</Link>
          </li>
          <li className="nav-item">
            <Link to="/bmi" className="nav-link">Bmi</Link>
          </li>
          <li className="nav-item">
            <Link to="/addwork" className="nav-link">Add workouts</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact us</Link>
          </li>
        </ul>
      </nav>

      <div className='plan-hero-section'>
        <h1 className='plan-title'>Explore Our Plans</h1>
      </div>

      <div className='card-container'>
        <div className='card'>
          <img src={img1} alt='Cardio' className='card-image' />
          <h3 className='card-title'>Cardio</h3>
          <p className='card-description'>Boost your cardiovascular health with our comprehensive cardio plans.</p>
          <button className="enter-button" onClick={handleCardioNavigation}>Enter</button>
        </div>
        <div className='card'>
          <img src={img2} alt='Home Workout' className='card-image' />
          <h3 className='card-title'>Home Workout</h3>
          <p className='card-description'>Get fit from the comfort of your home with our guided home workout plans.</p>
          <button className="enter-button" onClick={handleHomeWorkoutNavigation}>Enter</button>
        </div>
        <div className='card'>
          <img src={img3} alt='Gym' className='card-image' />
          <h3 className='card-title'>Gym</h3>
          <p className='card-description'>Achieve your fitness goals with our structured gym plans.</p>
          <button className="enter-button" onClick={handlegymNavigation}>Enter</button>
        </div>
      </div>
    </div>
  );
}

export default Plan;
