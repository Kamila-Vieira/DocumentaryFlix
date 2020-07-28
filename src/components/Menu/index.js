import React from 'react';
import logoMain from '../../assets/img/logoMain.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

function Menu(){
    
    return(
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={logoMain} alt="Tech.Dev.Flix logo"/>
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>  
        </nav>
    );

}

export default Menu;