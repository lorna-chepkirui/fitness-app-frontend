import styled from "styled-components";


function Routine ({routine, handleDelete, displayDetails, displayRoutineImage, isTrue}) {

    return (
        <RoutineBox>
            <h3 style={{fontSize: "1.30em" }}>{routine.routine_name}</h3>
            <RoutineContent>
                <li>Routine ID: {routine.id}</li>
                Focus: {routine.muscle_group} 
            </RoutineContent>
            <DetailButton onClick={() => {
                isTrue()
                displayRoutineImage(routine.routine_image)
                displayDetails(routine.exercises)}}>
                Details
            </DetailButton>
            <DetailButton onClick={() => handleDelete(routine.id)}>Delete</DetailButton>
        
        </RoutineBox>
    )}
    
export default Routine;

const RoutineBox = styled.div`
    margin: 48px auto 0;
    width: 350px;
    height: 200px;
    font-family: Quicksand, arial, sans-serif; 
    font-size: 1em;
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

const DetailButton = styled.button`
    background: ${props => props.primary ? "black" : "white"};
    color: ${props => props.primary ? "white" : "black"};
    font-family: 'Lobster', cursive;
    font-size: 1.25em;
    margin: 0.5em;
    padding: 0.01em 0.5em;
    border: 2px solid WHITE;
    border-radius: 3px;
    cursor: pointer;
    box-shadow: 0 0 3px gray;
    &:hover {
        outline: none;
        transform: scale(1.05);
    }
`;

const RoutineContent = styled.h5`
    color: ${props => props.primary ? "white" : "black"};
    font-family: 'Montagu Slab', serif;
    font-size: 1em;
    margin: 2em;
    padding: 0.25em 1em;
    overflow-y: auto;
    border: 2px solid WHITE;
    border-radius: 3px;
    cursor: pointer;
    width: 20em;
    height:6em;
    margin: auto;
    box-shadow: 0 0 3px gray;
    &:hover {
        outline: none;
        transform: scale(1.05);
    }
`;