import React from 'react';
import { FooterBase } from './styles';
/* import logoMain from '../../assets/img/logoMain.png';*/
import logoImersao from '../../assets/img/logoImersao.png';

function Footer() {
  return (
    <FooterBase>
     {/* <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
       <p/>
      <a href="https://tech-dev-flix.vercel.app/">
        <img src={logoMain} alt="Logo tech.dev.flix" />
      </a> */}
      <p>
        Criado durante a
        {' '}
        <a className="logo" href="https://www.alura.com.br/">
          <img src={logoImersao} alt="Imersão react da Alura" />
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
