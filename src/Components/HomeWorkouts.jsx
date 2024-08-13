import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeWorkouts.css';

const workouts = [
  { id: 1, name: 'Push-ups', description: 'A basic upper body strength exercise.', imageUrl: 'images/pushup.png' },
  { id: 2, name: 'Squats', description: 'A fundamental lower body exercise.', imageUrl: 'images/squats.png' },
  { id: 3, name: 'Burpees', description: 'A full-body exercise that boosts cardio fitness.', imageUrl: 'images/Burpees.png' },
  { id: 4, name: 'Lunges', description: 'A lower body workout targeting the quads and glutes.', imageUrl: 'images/Lunges.png' },
  { id: 5, name: 'Plank', description: 'An isometric core strength exercise.', imageUrl: 'images/Plank.png' },
  { id: 6, name: 'Mountain Climbers', description: 'A high-intensity cardio move.', imageUrl: 'images/Mountain-climber.png' },
  { id: 7, name: 'Bicycle Crunches', description: 'A core exercise that targets the abs.', imageUrl: 'images/Bicycle.png' },
  { id: 8, name: 'Jumping Jacks', description: 'A full-body exercise that increases heart rate.', imageUrl: 'images/Jumping.png' },
  { id: 9, name: 'Crunches', description: 'A core exercise that targets the abdominal muscles.', imageUrl: 'images/Crunches.png' },
  { id: 10, name: 'Russian Twists', description: 'A core exercise targeting the obliques.', imageUrl: 'images/Russ.png' },
  { id: 11, name: 'High Knees', description: 'A cardio move that also works the legs.', imageUrl: 'images/High.png' },
  { id: 12, name: 'Leg Raises', description: 'A lower abdominal exercise.', imageUrl: 'images/Leg.png' }
];

const imageStyles = [
  { top: '-70px', width: '280px', height: '150px' },
  { top: '-90px', width: '280px', height: '110px' },
  { top: '-100px', width: '310px', height: '105px' },
  { top: '-85px', width: '280px', height: '120px' },
  { top: '-110px', width: '280px', height: '130px' },
  { top: '-110px', width: '380px', height: '140px' },
  { top: '-85px', width: '295px', height: '150px' },
  { top: '-140px', width: '360px', height: '160px' },
  { top: '-70px', width: '330px', height: '170px' },
  { top: '-120px', width: '260px', height: '180px' },
  { top: '-135px', width: '180px', height: '190px' },
  { top: '-75px', width: '310px', height: '200px' }
];

const HomeWorkouts = () => {
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
    <div className="home-workouts-container">
       <button className="back-button" onClick={() => navigate('/plan')}>Back</button>
      <h1>Home Workouts</h1><br /><br/><br/>
      <div className="workout-grid-container">
        {filteredWorkouts.map((workout, index) => (
          <div key={workout.id} className={`workout-card-container ${counts[workout.id].visible ? 'visible' : 'hidden'}`}>
            <div className="workout-image-container" style={imageStyles[index]}>
              <img src={workout.imageUrl} alt={workout.name} className="workout-image" />
            </div>
            <h2 className='workkkk'>{workout.name}</h2>
            <p>{workout.description}</p>
            <div className="counter-container">
              <div className="counter-set-container">
                <h3 className='ok1'>Sets</h3>
                <button className='wwww' onClick={() => decrementCount(workout.id, 'sets')}>-</button>
                <span className='counter-value'>{counts[workout.id].sets}</span>
                <button className='wwww' onClick={() => incrementCount(workout.id, 'sets')}>+</button>
              </div>
              <div className="counter-reps-container">
                <h3 className='ok1'>Reps</h3>
                <button className='wwww' onClick={() => decrementCount(workout.id, 'reps')}>-</button>
                <span className='counter-value'>{counts[workout.id].reps}</span>
                <button className='wwww' onClick={() => incrementCount(workout.id, 'reps')}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div><br></br><br></br>
      {!isButtonClicked && (
        <button className="enter23" onClick={handleEnterClick}>Enter</button>
      )}
    </div>
  );
};

export default HomeWorkouts;
