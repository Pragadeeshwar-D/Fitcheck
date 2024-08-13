import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GymWorkouts.css';

const workouts = [
  { id: 1, name: 'Bench Press', description: 'A fundamental chest exercise using a barbell.', imageUrl: 'images/bench-press.png' },
  { id: 2, name: 'Deadlift', description: 'A full-body exercise that works the posterior chain.', imageUrl: 'images/deadlift.png' },
  { id: 3, name: 'Pull-Ups', description: 'An upper body exercise targeting the back and biceps.', imageUrl: 'images/Pullup.png' },
  { id: 4, name: 'Squats', description: 'A foundational lower body exercise.', imageUrl: 'images/squats.png' },
  { id: 5, name: 'Overhead Press', description: 'A shoulder exercise using a barbell.', imageUrl: 'images/over.png' },
  { id: 6, name: 'Bent Over Rows', description: 'An upper body exercise targeting the back.', imageUrl: 'images/bend.png' },
  { id: 7, name: 'Leg Press', description: 'A machine exercise for the legs.', imageUrl: 'images/Leg-press.png' },
  { id: 8, name: 'Upright Row', description: 'Targets shoulders and upper back.', imageUrl: 'images/Arm.png' },
  { id: 9, name: 'Bicep Curls', description: 'An arm exercise focusing on the biceps.', imageUrl: 'images/Bicep.png' },
  { id: 10, name: 'Tricep Extensions', description: 'An arm exercise focusing on the triceps.', imageUrl: 'images/triceps.png' },
  { id: 11, name: 'Calf Raises', description: 'A lower body exercise targeting the calves.', imageUrl: 'images/calf.png' },
  { id: 12, name: 'Chest Flyes', description: 'A chest exercise using dumbbells.', imageUrl: 'images/Chest.png' }
];

const imageStyles = [
  { top: '-90px', width: '280px', height: '150px' },
  { top: '-120px', width: '200px', height: '110px' },
  { top: '-75px', width: '250px', height: '105px' },
  { top: '-75px', width: '280px', height: '120px' },
  { top: '-90px', width: '125px', height: '130px' },
  { top: '-90px', width: '300px', height: '140px' },
  { top: '-75px', width: '250px', height: '150px' },
  { top: '-110px', width: '200px', height: '160px' },
  { top: '-80px', width: '250px', height: '170px' },
  { top: '-70px', width: '250px', height: '180px' },
  { top: '-80px', width: '180px', height: '190px' },
  { top: '-85px', width: '140px', height: '200px' }
];

const GymWorkouts = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const [counts, setCounts] = useState(workouts.reduce((acc, workout) => ({
      ...acc, 
      [workout.id]: { sets: 0, reps: 0, visible: false } 
    }), {}));
    const [showAll, setShowAll] = useState(false);
    const [isButtonClicked, setIsButtonClicked] = useState(false);

  const incrementCount = (id, type) => {
    setCounts((prevCounts) => {
      const newCount = prevCounts[id][type] + 1;
      return {
        ...prevCounts,
        [id]: {
          ...prevCounts[id],
          [type]: newCount,
          visible: newCount > 0
        }
      };
    });
  };

  const decrementCount = (id, type) => {
    setCounts((prevCounts) => {
      const newCount = Math.max(prevCounts[id][type] - 1, 0);
      return {
        ...prevCounts,
        [id]: {
          ...prevCounts[id],
          [type]: newCount,
          visible: newCount > 0
        }
      };
    });
  };

  const handleEnterClick = () => {
    setShowAll(true);
    setIsButtonClicked(true);
  };

  const filteredWorkouts = showAll
    ? workouts.filter(workout => counts[workout.id].visible)
    : workouts;

  return (
    <div className="home-workouts-wrapper">
        
       <button className="back-button" onClick={() => navigate('/plan')}>Back</button>
      <h1>Gym Workouts</h1><br /><br /><br/>

      <div className="workout-cards-container">
        {filteredWorkouts.map((workout, index) => (
          <div key={workout.id} className="workout-card">
            <div className="image-wrapper" style={imageStyles[index]}>
              <img src={workout.imageUrl} alt={workout.name} className="workout-img" />
            </div><br/><br/>
            <h2 className="workout-title">{workout.name}</h2>
            <p>{workout.description}</p>
            <div className="counter-wrapper">
              <div className="sets-counter">
                <h3 className="counter-label">Sets</h3>
                <button className="counter-btn" onClick={() => decrementCount(workout.id, 'sets')}>-</button>
                <span className="counter-number">{counts[workout.id].sets}</span>
                <button className="counter-btn" onClick={() => incrementCount(workout.id, 'sets')}>+</button>
              </div>
              <div className="reps-counter">
                <h3 className="counter-label">Reps</h3>
                <button className="counter-btn" onClick={() => decrementCount(workout.id, 'reps')}>-</button>
                <span className="counter-number">{counts[workout.id].reps}</span>
                <button className="counter-btn" onClick={() => incrementCount(workout.id, 'reps')}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div><br /><br />
      {!isButtonClicked && (
        <button className="entry-btn" onClick={handleEnterClick}>Enter</button>
      )}
    </div>
  );
};

export default GymWorkouts;
