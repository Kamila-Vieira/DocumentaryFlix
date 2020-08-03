import React from 'react';
import {Link} from 'react-router-dom';
import Footer from './Footer';
import styled from 'styled-components';
import logoMain from '../../assets/img/logoMain.png';
import './Menu/Menu.css';


const Main = styled.main`
    background: var(--grayDarker);
    color: var(--white);
    flex:1;
    padding-top:10px;
    padding-left: 5%;
    padding-right: 5%;
    background-image: linear-gradient(var(--grayDarker), gray);

    .buttons{
    display: flex;
    justify-content: space-between;
    align-items: center;
    }
`;

function PageDefault({children}){
    return(
            <>
            <nav className="Menu">
                <Link to="/">
                <img className="Logo" src={logoMain} alt="DocumentaryFlix logo"/>
                </Link>
            </nav>              
                <Main>
                    {children}
                </Main>    
            <Footer/>
            </>
    );

}

export default PageDefault;