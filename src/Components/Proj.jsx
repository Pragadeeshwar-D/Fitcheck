import React, { useState } from 'react';
import './Proj.css';

const Proj = () => {
  const [tomorrowGoals, setTomorrowGoals] = useState([
    "Plan Next Day's Workout - 30 minutes",
    "Prepare Healthy Meals",
    "Get Enough Rest"
  ]);

  const [newGoal, setNewGoal] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [todayGoals, setTodayGoals] = useState([
    "Morning Run - 5km",
    "Strength Training - 1 hour",
    "Yoga Session - 30 minutes"
  ]);
  const [achievements, setAchievements] = useState([
    { title: 'Kilometers Run', value: '30 km' },
    { title: 'Calories Burnt', value: '5000 kcal' },
    { title: 'Workouts Completed', value: '15' }
  ]);

  const runningOptions = ["5 km", "10 km", "15 km"];
  const workoutOptions = ["Yoga", "Strength Training", "Cardio"];
  const waterOptions = ["2 liters", "3 liters", "4 liters"];
  const sleepOptions = ["6 hours", "7 hours", "8 hours"];

  const handleAddGoal = () => {
    if (newGoal.trim() !== '') {
      setTomorrowGoals([...tomorrowGoals, newGoal]);
      setNewGoal('');
    }
  };

  const handleResetGoals = () => {
    setTomorrowGoals([]);
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);

    switch (category) {
      case 'Running':
        setCategoryOptions(runningOptions);
        break;
      case 'Workouts':
        setCategoryOptions(workoutOptions);
        break;
      case 'Water Levels':
        setCategoryOptions(waterOptions);
        break;
      case 'Sleep Durations':
        setCategoryOptions(sleepOptions);
        break;
      default:
        setCategoryOptions([]);
    }
  };

  const handleDeleteGoal = (index) => {
    const updatedGoals = tomorrowGoals.filter((_, i) => i !== index);
    setTomorrowGoals(updatedGoals);
  };

  const handleSubmitGoals = () => {
    setAchievements(prevAchievements => [
      ...prevAchievements,
      { title: 'Today\'s Goals', value: todayGoals.join(', ') }
    ]);

    setTodayGoals([]);
  };

  return (
    <div className="appContainer">
      <nav className="navbarContainer">
        <ul className="navbarList">
          <li className="navbarItem"><a className="navbarLink homeLink" href="/plan">Back</a></li>
        </ul>
        <div className="navbarSpacer"></div>
      </nav>
      <div className="title"> <h1>Set your Fitness Goals</h1></div>
      <div className="contentWrapper">
        <div className="leftContent">
          <div className="achievementDashboard">
            <h3 className="dashboardHeader">Yesterday's Achievements</h3>
            <div className="achievementCard">
              {achievements.map((achievement, index) => (
                <React.Fragment key={index}>
                  <div className="achievementItem">
                    <h4>{achievement.title}</h4>
                    <p>{achievement.value}</p>
                  </div>
                  {index < achievements.length - 1 && (
                    <div className="achievementSeparator"></div>
                  )}
                </React.Fragment>
              ))}
              {todayGoals.length > 0 && (
                <div className="achievementSeparator"></div>
              )}
              {todayGoals.length > 0 && (
                <div className="achievementItem">
                  <h4>Today's Goals</h4>
                  <ul>
                    
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="goalCards">
            <div className="goalCard">
              <div className="goalCardBody">
                <h3 className="goalCardTitle">Today's Goals</h3>
                <p className="goalCardText">Stay focused and achieve your daily targets.</p>
                <ul className="goalList">
                  {todayGoals.map((goal, index) => (
                    <li key={index} className="goalListItem">{goal}</li>
                  ))}
                </ul>
                <button className="goalButton" onClick={handleSubmitGoals}>Submit</button>
              </div>
            </div>
          </div>
        </div>

        <div className="rightContent">
          <div className="tomorrowGoalsContainer">
            <h3 className="tomorrowGoalsHeader">Tomorrow's Targets</h3>
            <table className="goalTable">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Goal</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {tomorrowGoals.map((goal, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{goal}</td>
                    <td>
                      <button onClick={() => handleDeleteGoal(index)} className="deleteGoalButton">-</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={handleResetGoals} className="resetGoalsButton">Reset Goals</button>
          </div>

          <div className="setGoalsSection">
            <h3>Set Tomorrow's Goals</h3>
            <div className="goalDropdownContainer">
              <select onChange={handleCategoryChange} value={selectedCategory} className="categoryDropdown">
                <option value="">Select a category</option>
                <option value="Running">Running</option>
                <option value="Workouts">Workouts</option>
                <option value="Water Levels">Water Levels</option>
                <option value="Sleep Durations">Sleep Durations</option>
              </select>

              {selectedCategory && (
                <select
                  onChange={(e) => setNewGoal(e.target.value)}
                  value={newGoal}
                  className="goalOptionsDropdown"
                >
                  <option value="">Select a goal</option>
                  {categoryOptions.map((option, index) => (
                    <option key={index} value={`${selectedCategory}: ${option}`}>{option}</option>
                  ))}
                </select>
              )}

              <button onClick={handleAddGoal} className="addGoalButton">Add Goal</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proj;
