import LandingPage from "./LandingPage";
import MainPage from "./MainPage";
import CreateRoutineForm from "./CreateRoutineForm";
import CreateExerciseForm from "./CreateExerciseForm";
import React, {useEffect, useState } from "react";
import {Route, Routes, useNavigate} from "react-router-dom";


function App() {  

  const potato = (data) => data.json()
  const [routines, setRoutines] = useState([])
  const [exercises, setExercise] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/routines")
    .then(potato)
    .then(setRoutines)
  }, [])

  const navigate = useNavigate()

  const handleAddRoutine = (newRoutine) => {
    fetch('http://localhost:9292/routines', {
      method:'POST',
      headers: {
          'Content-Type':'application/json',
      },
      body: JSON.stringify(newRoutine)
    }) 
    .then(potato)
    .then(newRoutineFromBackend => {
        const updatedRoutines =  [newRoutineFromBackend, ...routines]
        setRoutines(updatedRoutines)
        navigate.push("/mainpage")
    })
}

const handleAddExercise = (newExercise) => {
  fetch('http://localhost:9292/exercises', {
      method:'POST',
      headers: {
          'Content-Type':'application/json',
      },
      body: JSON.stringify(newExercise)
  }) 
  .then(potato)
  .then(newExerciseFromBackend => {
    const updatedExercises =  [newExerciseFromBackend, ...exercises]
    setExercise(updatedExercises)
    navigate.push("/mainpage")
  })
}

const handleDelete = (id) => {
  fetch(`http://localhost:9292/routines/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    },
  })
  .then(potato)
  .then(setRoutines)
}

  return (

      <>
  <Routes>
      <Route exact path = "/" element={<LandingPage/>} />
      <Route  exact path = "/mainpage" element=
        {<MainPage routines={routines} handleDelete={handleDelete}/>} />
      <Route exact path= "/newexercise" element=
        {<CreateExerciseForm handleAddExercise={handleAddExercise}/>} />
      <Route exact path= "/newroutine" element =
        {<CreateRoutineForm handleAddRoutine={handleAddRoutine}/>} />   

    </Routes>
    </>

  );
}

export default App;
