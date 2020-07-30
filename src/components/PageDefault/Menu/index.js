import React from 'react';
import {Link} from 'react-router-dom';
import logoMain from '../../../assets/img/logoMain.png';
import './Menu.css';
import Button from '../../Button';
// import ButtonLink from './components/ButtonLink';

function Menu(){
    
    return(
        <nav className="Menu">
            <Link to="/">
            <img className="Logo" src={logoMain} alt="DocumentaryFlix logo"/>
            </Link>
            <Button as={Link} to="/cadastro/video" className="ButtonLink">
                Adicionar Mais Vídeos
            </Button>  
        </nav>
    );

}

export default Menu;