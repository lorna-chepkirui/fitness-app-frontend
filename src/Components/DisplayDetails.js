import styled from "styled-components";
import React from "react";


function DisplayDetails ({routineExercises, routineImage}) {
    
    return (
        
        <Layout>
            <div>
                {routineImage ? 
                <img style={{margin: "2rem"}} alt="routineImage" src={routineImage}/> : 
                <>
                <p style={{color: "gray", marginTop: "20rem"}}>Click on a routine for more details</p><p>| 💪 | 🏋️ | 🏃‍♀️ |</p>
                </>
                }
            </div>
            <div>
                {routineExercises.map(exercise => 
                    <>
                        <ExerciseBox>
                            <p>Exercise Name: {exercise.name}</p>
                            <p>Instructions: {exercise.instructions}</p>
                        </ExerciseBox>
                    </> 
                )} 
                
            </div>
        </Layout>

    );
}


export default DisplayDetails;

const Layout = styled.div`
    height: 80vh;
    width: 95%;
    border: 2px solid white;
    border-radius: 3px;
    box-shadow: 0 0 3px gray;
    float:right;
    text-align: center;
    margin: 1rem 1rem 1rem 1rem;
    background: rgba(255, 255, 255, 0.8);
    overflow: scroll;
`;
const ExerciseBox = styled.div`
    margin: 48px auto 0;
    width: 650px;
    height: 100px;
    font-family: Quicksand, arial, sans-serif; 
    font-size: 1.25em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    border: 2px solid WHITE;
    cursor: pointer;
    box-shadow: 0 0 3px gray;
    &:hover {
        outline: none;
        transform: scale(1.05);
        }
`;