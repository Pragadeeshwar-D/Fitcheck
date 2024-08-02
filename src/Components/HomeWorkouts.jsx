import React, { useState } from 'react';
// import './HomeWorkouts.css';

const workouts = [
  { id: 1, name: 'Push-ups', description: 'A basic upper body strength exercise.', imageUrl: 'pushup.png' },
  { id: 2, name: 'Squats', description: 'A fundamental lower body exercise.', imageUrl: 'squats.png' },
  { id: 3, name: 'Burpees', description: 'A full-body exercise that boosts cardio fitness.', imageUrl: 'Burpees.png' },
  { id: 4, name: 'Lunges', description: 'A lower body workout targeting the quads and glutes.', imageUrl: 'Lunges.png' },
  { id: 5, name: 'Plank', description: 'An isometric core strength exercise.', imageUrl: 'Plank.png' },
  { id: 6, name: 'Mountain Climbers', description: 'A high-intensity cardio move.', imageUrl: 'Mountain-climber.png' },
  { id: 7, name: 'Bicycle Crunches', description: 'A core exercise that targets the abs.', imageUrl: 'Bicycle.png' },
  { id: 8, name: 'Jumping Jacks', description: 'A full-body exercise that increases heart rate.', imageUrl: 'Jumping.png' },
  { id: 9, name: 'Crunches', description: 'A core exercise that targets the abdominal muscles.', imageUrl: 'Crunches.png' },
  { id: 10, name: 'Russian Twists', description: 'A core exercise targeting the obliques.', imageUrl: 'Russ.png' },
  { id: 11, name: 'High Knees', description: 'A cardio move that also works the legs.', imageUrl: 'High.png' },
  { id: 12, name: 'Leg Raises', description: 'A lower abdominal exercise.', imageUrl: 'Leg.png' }
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
  const [counts, setCounts] = useState(workouts.reduce((acc, workout) => ({
    ...acc, 
    [workout.id]: { sets: 0, reps: 0, visible: false } 
  }), {}));
  const [showAll, setShowAll] = useState(false);

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
  };

  const filteredWorkouts = showAll
    ? workouts.filter(workout => counts[workout.id].visible)
    : workouts;

  return (
    <div className="home-workouts">
      <h1>Home Workouts</h1><br /><br/>
      <div className="workout-grid">
        {filteredWorkouts.map((workout, index) => (
          <div key={workout.id} className={`workout-card ${counts[workout.id].visible ? 'visible' : 'hidden'}`}>
            <div className="image-container" style={imageStyles[index]}>
              <img src={workout.imageUrl} alt={workout.name} className="workout-image" />
            </div>
            <h2>{workout.name}</h2>
            <p>{workout.description}</p>
            <div className="counter">
              <div className="counter-set">
                <h3>Sets</h3>
                <button onClick={() => decrementCount(workout.id, 'sets')}>-</button>
                <span className='ww'>{counts[workout.id].sets}</span>
                <button onClick={() => incrementCount(workout.id, 'sets')}>+</button>
              </div>
              <div className="counter-reps">
                <h3>Reps</h3>
                <button onClick={() => decrementCount(workout.id, 'reps')}>-</button>
                <span className='ww'>{counts[workout.id].reps}</span>
                <button onClick={() => incrementCount(workout.id, 'reps')}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div><br></br><br></br>
      <button className="enter-button" onClick={handleEnterClick}>Enter</button>
    </div>
  );
};

export default HomeWorkouts;
