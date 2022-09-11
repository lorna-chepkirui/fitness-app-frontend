import {useState} from "react"
import Header from "./Header"
import styled from "styled-components"

function CreateExerciseForm ({handleAddExercise}) {

    const [formData, setFormData] = useState({
        name: '',
        instructions: '',
        personal_trainer_id: '',
        routine_id: ''
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        const newExercise = {...formData}
        e.preventDefault() 
        handleAddExercise(newExercise)
        reset()
    }

    const reset = () => {
        setFormData({
            name: '',
            instructions: '',
            personal_trainer_id: '',
            routine_id: ''
        })
    }

    return (

    <>
        <BackgroundImage>
        <Header />
        <Layout>
            <form onSubmit={handleSubmit}>
                <Styleddiv>
                    <label htmlFor='ExerciseName'> Exercise Name: </label>            
                    <input 
                        id='ExerciseName' 
                        type ='text' 
                        name='name' 
                        placeholder='Exercise name here...' 
                        value={formData.name}
                        onChange={handleChange}>
                    </input>
                </Styleddiv>
                <Styleddiv>
                    <label htmlFor='Instructions' > Instructions: </label>
                    <input  
                        type='text' 
                        id='Instructions' 
                        name='instructions' 
                        placeholder='Instructions here...'
                        value={formData.instructions}
                        onChange={handleChange}>
                    </input>
                </Styleddiv>
                <Styleddiv>
                    <label htmlFor='PersonalTrainerId'> Personal Trainer ID: </label>
                    <input 
                        type='number' 
                        id='PersonalTrainerId' 
                        name='personal_trainer_id' 
                        placeholder='Personal Trainer ID here...'
                        value={formData.personal_trainer_id}
                        onChange={handleChange}>                    
                    </input>
                </Styleddiv>
                <Styleddiv>
                    <label htmlFor='RoutineId'> Routine ID: </label>
                    <input 
                        type='number' 
                        id='RoutineId' 
                        name='routine_id' 
                        placeholder='Routine ID here...' 
                        value={formData.routine_id}
                        onChange={handleChange}/>
                </Styleddiv>
                <DetailButton type="reset" onClick={handleSubmit}>Add Exercise </DetailButton>
            </form>
        </Layout>
        </BackgroundImage>
    </>
    );
}

export default CreateExerciseForm;

const BackgroundImage = styled.div`
    
    background: url("https://images.everydayhealth.com/images/how-to-start-working-out-again-derailed-from-covid-1440x810.jpg");
    position: fixed;
    min-width: 100%;
    min-height: 100%;
    background-size: cover;
    background-position: cover;
    background-repeat: no-repeat;  
`

const Styleddiv = styled.div`
    font-size: 1.5em;
    text-align: center;
    margin: 3rem 1rem 1rem 1rem ; 
`

const Layout = styled.div`
    width: 50em;
    height: auto;
    border: 2px solid white;
    border-radius: 3px;
    box-shadow: 0 0 3px gray;
    float:center;
    vertical-align: center;
    text-align: center;
    margin: auto;
    margin-top: 10rem ;
    background: rgba(255, 255, 255, 0.8);
`

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