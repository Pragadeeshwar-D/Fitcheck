import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Sign from './Components/Sign';
import Plan from './Components/Plan'; // Import the Plan component
import Trainers from './Components/Trainers';
import About from './Components/About';
import Contact from './Components/Contact';
import HomeWorkouts from './Components/HomeWorkouts';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sign" element={<Sign />} />
        <Route path="/Plan" element={<Plan />} /> {/* Add route for Plan */}
        <Route path="/trainer" element={<Trainers />} /> {/* Add route for Plan */}
        <Route path="/about" element={<About />} /> {/* Add route for Plan */}
        <Route path="/contact" element={<Contact />} /> {/* Add route for Plan */}
        <Route path="/homework" element={<HomeWorkouts />} /> {/* Add route for Plan */}
      </Routes>
    </Router>
  
  );
}

export default App;
