import styled from "styled-components";
import {Link} from "react-router-dom"

function Header () {
    return (
    <HeaderContainer>
        <Link to="/" style={{textDecoration: 'none', color:"white"}}>
            Gymzilla Fitness
        </Link>
        <Link to="/mainpage">
          <NewButton>Home</NewButton>
        </Link>
        <Link to="/newroutine">
            <NewButton>Design New Routine</NewButton>
        </Link>
        <Link to="/newexercise">
        <NewButton>Add New Exercises</NewButton>
        </Link>
    </HeaderContainer>

    )}

export default Header;

const HeaderContainer = styled.div`
    justify-content:space-around;
    font-family: 'Lobster', cursive;
    color: black;
    text-align: center;
    font-size: 3.5em;
    margin: 0.1em;
`;

const NewButton = styled.button`
    background: ${props => props.primary ? "black" : "white"};
    color: ${props => props.primary ? "white" : "black"};
    font-family: 'Lobster', cursive;
    font-size: 0.4em;
    padding: 0.2em 1em;
    border: 2px solid WHITE;
    border-radius: 3px;
    cursor: pointer;
    box-shadow: 0 0 3px gray;
    &:hover {
        outline: none;
        transform: scale(1.05);
    } 
    margin-left: 5em
;`