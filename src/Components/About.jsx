import React from 'react';
import './About.css';
import img4 from './you.jpg';

const About = () => {
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

      <div className="about-content">
        <h1 className="ab">About Us</h1>
        <p>
          Welcome to our fitness center! We are dedicated to helping you achieve your health and fitness goals. <br />
          Our team of experienced trainers and state-of-the-art facilities ensure that you get the best support 
          and resources for your journey towards a healthier lifestyle.
        </p>
        <div className="center-container">
          <img src={img4} alt="Fitness" className="center-image" />
          <div>
            <div className="center-text">You vs 2024</div>
            <div className="additional-text">Log 1,024 km in 2024</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
