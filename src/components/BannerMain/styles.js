import styled from 'styled-components';

export const ContentAreaContainer = styled.section`
  margin-left: 5%;
  margin-right: 5%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
   @media only screen and (max-device-width: 800px) {
    padding-top: 100px;
    flex-direction: column;
  }
`;

ContentAreaContainer.Item = styled.div`
  width: 50%;
  display: inline-block;
  margin-bottom: 50px;
   @media only screen and (max-device-width: 800px) {
    width: 100%;
  }
`;

ContentAreaContainer.Category = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 70px;
  display: flex;
  align-items: center;
  text-align: center;
  display: inline-block; 
  padding: 25px;
  line-height: 1;
  border-radius: 4px;

   @media only screen and (max-device-width: 800px) {
    display: none;
    font-size: 18px;
    padding: 10px;
  }
`;

ContentAreaContainer.Description = styled.p`
   @media only screen and (max-device-width: 800px) {
    display: none;
  }
`;

ContentAreaContainer.Title = styled.h2`
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 32px;

   @media only screen and (max-device-width: 800px) {
    font-size: 70px;
    text-align: center;
    margin-top: 70px;
  }
`;

export const BannerMainContainer = styled.section`
  height: 80vh;
  position: relative;
  color: #fff;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`}; 
  background-size: cover;
  background-position: center;
   @media only screen and (max-device-width: 800px) {
    height: 50%;
    min-height: 20vh;
  }

  &:after,
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 20%;
  }

  &:before {
    top: 0;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }

  &:after {
    bottom: 0;
    background: linear-gradient(0deg, #141414 0%, transparent 100%);
  }
`;

export const WatchButton = styled.button`
  cursor: pointer;
  padding: 30px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 33px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  border: 1px solid transparent;
  color: var(--gold);
  background: var(--black);
  border-color: var(--gold);
  transition: opacity .3s;
  display: none;
  margin: 0 auto;
  text-align:center;
  width: 300px;
  height: 100px;

   @media only screen and (max-device-width: 800px) {
    display: block;
  }
`;
