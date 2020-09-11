import React from 'react';
import { Link } from 'react-router-dom';
import logoMain from '../../../assets/img/logoMain.png';
import './Menu.css';
import Button from '../../Button';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={logoMain} alt="DocumentaryFlix logo" />
      </Link>
      <Button as={Link} to="/cadastro/video">
        +Vídeos
      </Button>
    </nav>
  );
}

export default Menu;
