import './Addwork.css';
import React,{useState, useEffect} from 'react';
import Axios from 'axios';

function Addwork() {

    const [exName,setExName] = useState("");
    const [sets,setSets] = useState(0);
    const [reps,setReps] = useState(0);
    const [newExName, setNewExName] = useState("");
    const [newSets, setNewSets] = useState(0);
    const [newReps, setNewReps] = useState(0);
    const [exerciseList, setExerciseList] = useState([]);

    useEffect(() => {
      Axios.get("http://localhost:3001/read").then((response)=> {
        setExerciseList(response.data)
        console.log(response.data)
      })
    },[exerciseList])

    const addToList = () => {
      Axios.post("http://localhost:3001/insert", {
        exName:exName, 
        sets:sets,
        reps:reps
      })
    }

    const updateExercise = (id) => {
      Axios.put("http://localhost:3001/update",{
        id: id,
        newExName: newExName,
        newSets:newSets,
        newReps:newReps
      })
    }

    const deleteExercise = (id) => {
      Axios.delete(`http://localhost:3001/delete/${id}`,{
        id: id,
        newExName: newExName
      })
    }

  return (
    <div className="App">
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
        <h1>CHOOSE YOUR WORKOUTS</h1>
        <label>Exercise Name:</label>
        <input type="text" onChange={(event)=>{setExName(event.target.value)}}/>
        <label>Sets:</label>
        <input type="number" onChange={(event)=>{setSets(event.target.value)}}/>
        <label>Reps:</label>
        <input type="number" onChange={(event)=>{setReps(event.target.value)}}/>
        <button onClick={addToList}>Add to List</button>
        
        <h1>Exercises List</h1>
        {exerciseList.map((val, key)=>{
          return(
            <div className="exercise" key={key}>
              <h1>Exercise Name :{val.exName}</h1> 
              <h1 >Sets : {val.sets}</h1>
              <h1 >Reps :{val.reps}</h1>{" "}
              <input 
                type="text" 
                placeholder="New Exercise name..." 
                onChange={(event)=>{setNewExName(event.target.value)}} 
              />
              <input 
                type="text" 
                placeholder="Alter sets" 
                onChange={(event)=>{setNewSets(event.target.value)}} 
              />
              <input 
                type="text" 
                placeholder="Alter reps" 
                onChange={(event)=>{setNewReps(event.target.value)}} 
              />
              <button onClick={()=>updateExercise(val._id)}>Update</button>
              <button onClick={()=>deleteExercise(val._id)}>Delete</button>
            </div>
          )
        })}
    </div>
  );
}

export default Addwork;