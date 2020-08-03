import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './Footer';
import logoMain from '../../assets/img/logoMain.png';
import './Menu/Menu.css';

const Main = styled.main`
    font-size: 10px;
    color: var(--white);
    flex:1;
    padding-top:10px;
    padding-left: 5%;
    padding-right: 5%;
    background-image: linear-gradient(var(--grayDarker), gray);

    h1{
      
      font-size: 35px;

    };

    ul{

      font-size: 16px;
      
      li{

        padding-top: 5px;

      }
    };

    .buttons{
      
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    }

`;

function PageDefault({ children }) {
  return (
    <>
      <nav className="Menu">
        <Link to="/">
          <img className="Logo" src={logoMain} alt="DocumentaryFlix logo" />
        </Link>
      </nav>
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
