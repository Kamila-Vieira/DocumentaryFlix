import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
/* import dadosIniciais from '../../data/dados_iniciais.json'; */
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Menu from '../../components/PageDefault/Menu';
import Footer from '../../components/PageDefault/Footer';
import categoriesRepository from '../../repositories/categories';

const HomeMain = styled.div`
    min-height: calc(100vh - var(--bodyPaddingTop));
    background: var(--grayDarker);
    padding: 0;
    font-size: 16px;
    color: var(--white);
`;

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  return (
    <>
      <Menu />

      <HomeMain>
        {dadosIniciais.length === 0
      && (
      <div style={{ position: 'fixed' }}>
        Loading...
      </div>
      )}
        {dadosIniciais.map((categoria, indice) => {
          if (indice === 0) {
            return (
              <div key={categoria.id}>
                <BannerMain
                  videoTitle={dadosIniciais[0].videos[0].titulo}
                  url={dadosIniciais[0].videos[0].url}
                  videoDescription={dadosIniciais[0].videos[0].description}
                />
                <Carousel
                  ignoreFirstVideo
                  category={dadosIniciais[0]}
                />
              </div>
            );
          }

          return (
            <Carousel
              key={categoria.id}
              category={categoria}
            />
          );
        })}

        {/* <BannerMain
            videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
            url={dadosIniciais.categorias[0].videos[0].url}
            videoDescription="Nesse documentário da History Channel é mostrado de uma forma sucinta o que já é
            propalado há muitas décadas em livros e na internet sobre a grande conspiração contra as novas tecnologias
            que podem por em risco o monopólio e poder da grande indústria petrolífera, e demais industrias."
          />
          <Carousel
            ignoreFirstVideo
            category={dadosIniciais.categorias[0]}
          />
          <Carousel
            category={dadosIniciais.categorias[1]}
          />
        */}

      </HomeMain>
      <Footer />
    </>

  );
}

export default Home;
