import styled from 'styled-components';

const Button = styled.button`
    
    color: var(--gold);
    border: 1px solid var(--gold);
    background-color: var(--black);
    box-sizing: border-box;
    cursor: pointer;
    padding: 10px 18px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;

    &:hover,
    &:focus {
        opacity: .5;
    }

    @media only screen and (max-device-width: 800px){
        width: 200px;
        height: 70px;
        font-size: 33px;
        text-align: center;
        padding: 15px 18px;
    }   
`;

export default Button;
