import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Sign from './Components/Sign';
import Plan from './Components/Plan'; 
import Trainers from './Components/Trainers';
import About from './Components/About';
import Contact from './Components/Contact';
import HomeWorkouts from './Components/HomeWorkouts';
import Proj from './Components/Proj';
import GymWorkouts from './Components/GymWorkouts';
import Addwork from './Components/Addwork';
import Bmi from './Components/Bmi';
import { fetchData } from './utils/fetchData';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sign" element={<Sign />} />
        <Route path="/Plan" element={<Plan />} /> 
        <Route path="/trainer" element={<Trainers />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/homework" element={<HomeWorkouts />} />
        <Route path="/Proj" element={<Proj/>} />
        <Route path="/gym" element={<GymWorkouts/>} />
        <Route path="/bmi" element={<Bmi/>} />
        <Route path="/addwork" element={<Addwork/>} />
    
      </Routes>
    </Router>
  
  );
}

export default App;
