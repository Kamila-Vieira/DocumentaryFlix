import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './Footer';
import logoMain from '../../assets/img/logoMain.png';
import './Menu/Menu.css';
import '../ButtonLink/style.css';

const Main = styled.main`
    font-size: 16px;
    color: var(--white);
    flex:1;
    padding-top:10px;
    padding-left: 5%;
    padding-right: 5%;
    background: var(--grayDarker);
    
    height: 100%;
    width: 100%;

    h1{
        font-size: 35px;

        @media only screen and (max-device-width: 800px) {
          font-size: 50px;
          margin-bottom: 50px;
      }

    };

    ul{
        font-size: 18px;
        line-height: 25px;

        @media only screen and (max-device-width: 800px) {
            font-size: 30px;
            line-height: 30px;
        }
        
        li{
          padding-top: 5px;
          list-style: none;
        }
    };

    .buttons{
      
    display: flex;
    justify-content: space-between;
    align-content: center;
    flex-direction: right;
    
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
