import styled from "styled-components";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function LandingPage () {
    return (
    <div >
    <Styleddiv>
 
    <Link to="/mainpage">
        <Button> My Routines</Button>
    </Link>

    <LandingHeaderContainer>Gymzilla Fitness</LandingHeaderContainer>
    </Styleddiv>
    </div>
    )}

export default LandingPage

const Styleddiv = styled.div`
    background: url("https://images.everydayhealth.com/images/how-to-start-working-out-again-derailed-from-covid-1440x810.jpg");
    position: fixed;
    min-width: 100%;
    min-height: 100%;
    background-size: cover;
    background-position: cover;
    h1{
        justify-content: center;
    }
`
const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    font-family: 'Lobster', cursive;
    font-size: 1.25em;
    margin: 2em;
    padding: 0.25em 1em;
    border: 2px solid white;
    border-radius: 3px;
    cursor: pointer;
    box-shadow: 0 0 3px gray;
    &:hover {
        outline: none;
        transform: scale(1.05);
    }
    margin-left: 1300px;
`

const LandingHeaderContainer = styled.div`
    display:flex;
    justify-content:space-around;
    font-family: 'Lobster', cursive;
    color: white;
    font-size: 10em;
    margin: .9em;