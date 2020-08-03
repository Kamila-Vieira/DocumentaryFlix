import styled from 'styled-components';
import Button from '../../Button'

/* Configurações do Menu inicial*/

export const MenuWrapper = styled.nav`
    width: 100%;
    height: 94px;
/*     z-index: 100;
 */  
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding-left: 5%;
    padding-right: 5%;
  
    background: var(--black);
    border-bottom: 2px solid var(--gold);
  
  body {
    --bodyPaddingTop: 94px;
    padding-top: var(--bodyPaddingTop);
    
  };
  @media (max-width: 800px) {
    .Menu {
      height: 40px;
      justify-content: center;
    }
    body {
      --bodyPaddingTop: 40px;
      padding-top: var(--bodyPaddingTop);
    };
  }
`;

/* Configurações do Logo*/
export const LogoImage = styled.img`

  max-width: 250px;
  
  @media (max-width: 800px) {
    .Logo {
      max-width: 105px;
 
    }
  }
 `;

/* Configurações de Botôes*/

export const ButtonLink = styled(Button)`
    color: var(--black);
    border: 1px solid var(--gold);
    box-sizing: border-box;
    cursor: pointer;
    padding: 10px 18px;
    font-style: bold;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    background: var(--gold);

  
  &:hover,
  &:focus {
    opacity: .5;
  };
  
  @media (max-width: 800px) {
    a.ButtonLink {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--primary);
      border-radius: 0;
      border: 0;
      text-align: center;
    }

  }
`;
