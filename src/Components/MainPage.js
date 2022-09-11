import RoutinesContainer from "./RoutinesContainer";
import styled from "styled-components";
import React from "react";
import Header from "./Header";


function MainPage ({routines, handleDelete}) {

    return (
        <>
            <Styleddiv>
            <Header />  
            <RoutinesContainer routines={routines} handleDelete={handleDelete}/>
            
            </Styleddiv>
        </>
    );
}

export default MainPage;

const Styleddiv = styled.div`
    
    background: url("https://images.everydayhealth.com/images/how-to-start-working-out-again-derailed-from-covid-1440x810.jpg");
    position: fixed;
    min-width: 100%;
    min-height: 100%;
    background-size: cover;
    background-position: cover;
    background-repeat: no-repeat;`