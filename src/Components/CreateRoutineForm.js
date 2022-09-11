import {useState} from "react";
import styled from "styled-components";
import Header from "./Header";


function CreateRoutineForm ({handleAddRoutine}) {
    
    const [formData, setFormData] = useState({
        routine_name: '',
        muscle_group: '',
        personal_trainer_id: '',
        routine_image: ''
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        const newRoutine = {...formData}
        e.preventDefault() 
        handleAddRoutine(newRoutine)
        reset()
    }

    const reset = () => {
        setFormData({
            routine_name: '',
            muscle_group: '',
            personal_trainer_id: '',
            routine_image: ''

        })
    }

    return (
        <>
        <BackgroundImage>
        <Header />  
        <Layout>
            <form onSubmit={handleSubmit}>

                <Styleddiv>
                    <label htmlFor='RoutineName'> Routine Name: </label>
                    <input 
                    id='RoutineName' 
                    type ='text' 
                    name='routine_name' 
                    placeholder='Routine name here...' 
                    value={formData.routine_name} 
                    onChange={handleChange} />
                </Styleddiv>

                <Styleddiv>
                    <label htmlFor='MuscleGroup' > Muscle Group: </label>
                    <input  
                    type='text' id='MuscleGroup' 
                    name='muscle_group' 
                    placeholder='Muscle Group here...' 
                    value={formData.muscle_group} 
                    onChange={handleChange} />
                </Styleddiv>

                <Styleddiv>
                    <label htmlFor='PersonalTrainer'> Personal Trainer ID: </label>
                    <input type='number' 
                    id='PersonalTrainerID' 
                    name='personal_trainer_id' 
                    placeholder='Personal Trainer ID here...' 
                    value={formData.personal_trainer_id} 
                    onChange={handleChange}/>
                </Styleddiv>

                <Styleddiv>
                    <label htmlFor='image'> Picture URL: </label>
                    <input 
                    id='imageInput' type='url' 
                    name='routine_image' 
                    placeholder='Image here...' 
                    value={formData.routine_image} 
                    onChange={handleChange}/>
                </Styleddiv>              
                <DetailButton type="reset" onClick={handleSubmit}>Add Routine </DetailButton>
                

            </form>
        </Layout>
        </BackgroundImage>
        </>
    );
}

export default CreateRoutineForm;

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