import React from 'react';
import { FooterBase } from './styles';
/* import logoMain from '../../assets/img/logoMain.png';*/
import logoImersao from '../../../assets/img/logoImersao.png';

function Footer() {
  return (
    <FooterBase>
      Criado durante a
        {' '}
        <a className="logo" href="https://www.alura.com.br/imersao-react" target="_blank">
          <img src={logoImersao} alt="Imersão react da Alura" width="100" height="40" />
        </a>

    </FooterBase>
  );
}

export default Footer;
