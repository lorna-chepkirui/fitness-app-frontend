import Routine from "./Routine";
import DisplayDetails from "./DisplayDetails";
import styled from "styled-components";
import { useState } from "react";

function RoutinesContainer ({routines,handleDelete}) {

    const [routineExercises, setRoutineExercises] = useState([])
    const [routineImage, setRoutineImage] = useState([])
    

    const displayDetails = (routineExercises) => {
        setRoutineExercises(routineExercises)
    
    }
    const displayRoutineImage = (routineImage) => {
        setRoutineImage(routineImage)
    }
    
    return (
        <>
        <RoutineHeader>Routine List:</RoutineHeader>
        <RoutineClass >
        <GridLayout>
            {routines.map(routine => 
                <Routine 
                key={routine.id} 
                routine={routine}
                handleDelete={handleDelete}
                displayDetails={displayDetails}
                displayRoutineImage={displayRoutineImage}
               
                />)}
        </GridLayout>
            <DisplayDetails routineImage={routineImage} routineExercises={routineExercises}/>
        </RoutineClass >
        </>
    )}

export default RoutinesContainer;

const GridLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    justify-content: left;
    overflow-y: auto;
    height: 80vh;
    width: 80%;
    background: rgba(255, 255, 255, 0.8);
    border: 2px solid white;
    border-radius: 3px;
    box-shadow: 0 0 3px gray;
    margin-left: 3rem;
    margin-top: 1rem;
`;

const RoutineHeader = styled.h1`
    font-family: 'Lobster', cursive;
    color: black;
    text-align: left;
    font-size: 1.8em;
    margin-left: 2rem;
`;

const RoutineClass = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;`