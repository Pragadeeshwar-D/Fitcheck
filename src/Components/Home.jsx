import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            {/* <h1>Gym</h1> */}
          </li>
          <li className="nav-item">
            <a href="/" className="homee">Home</a>
          </li>
          <li className="nav-item">
          <Link to="/Plan" className="wwe">Plan</Link>
          </li>
          <li className="nav-item">
            <a href="/trainer" className="wwf">Tracker</a>
          </li>
          <li className="nav-item">
            <a href="/bmi" className="wwf">Bmi</a>
          </li>
          <li className="nav-item">
            <a href="/addwork" className="wwe">Add workouts</a>
          </li>
       
          <li className="nav-item">
            <a href="/About" className="wwe">About</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="wwf">Contact us</a>
          </li>
        </ul>
      </nav>

      <div className='hero-section'>
        <div className='textee'>
          We Specialize In
        </div>
        {/* <img src={ExampleImage} alt="Specialize" className='specialize-image' /> */}
      </div>

      <div className='textee1'>
        Shaping Your Body
      </div>
      {/* <div className='textee2'>
        Our emphasis on seamless conversion experiences <br/>ensures that our product and services meet the<br/> highest standards of usability and satisfaction.
      </div> */}
      <br></br>
      <div>
        <Link to="/Sign">
          <button className='gg'>
            Join us Now
          </button>
        </Link>
      </div>

      <div className='textee3'>
        EXPLORE OUR SERVICES
      </div>
    </div>
  );
}

export default Home;
