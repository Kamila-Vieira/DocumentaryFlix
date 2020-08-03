import React from 'react';
import styled from 'styled-components';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Menu from '../../components/PageDefault/Menu';
import Footer from '../../components/PageDefault/Footer';

const HomeWrapper = styled.div`

background: var(--grayDarker);
`;

function Home() {
  return (
    <HomeWrapper>

      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="Nesse documentário da History Channel é mostrado de uma forma sucinta o que já é propalado há muitas décadas em livros e na internet sobre a grande conspiração contra as novas tecnologias que podem por em risco o monopólio e poder da grande indústria petrolífera, e demais industrias."
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carousel
        category={dadosIniciais.categorias[1]}
      />
      <Carousel
        category={dadosIniciais.categorias[2]}
      />
      <Carousel
        category={dadosIniciais.categorias[3]}
      />
      <Carousel
        category={dadosIniciais.categorias[4]}
      />
      <Carousel
        category={dadosIniciais.categorias[5]}
      />
      <Carousel
        category={dadosIniciais.categorias[6]}
      />

      <Footer />

    </HomeWrapper>
  );
}

export default Home;
