import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import Menu from "../../components/PageDefault/Menu";
import Footer from "../../components/PageDefault/Footer";
import categoriesRepository from "../../repositories/categories";
import bannerRepository from "../../repositories/banner";

const HomeMain = styled.div`
  min-height: calc(100vh - var(--bodyPaddingTop));
  background: var(--grayDarker);
  padding: 0;
  font-size: 16px;
  color: var(--white);
`;

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  const [dadosBanner, setDadosBanner] = useState(null);

  useEffect(() => {
    bannerRepository
      .getOne()
      .then((banner) => {
        setDadosBanner(banner);
      })
      .catch((err) => {
        console.log(err.message);
      });
    categoriesRepository
      .getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <Menu />

      <HomeMain>
        {dadosBanner != null && (
          <BannerMain
            url={dadosBanner.url}
            videoTitle={dadosBanner.title}
            videoDescription={dadosBanner.description}
          />
        )}

        {dadosIniciais.length === 0 && <div style={{ position: "fixed" }}>Loading...</div>}

        {dadosIniciais.map((categoria) => (
          <Carousel key={categoria.id} category={categoria} />
        ))}
      </HomeMain>
      <Footer />
    </>
  );
}

export default Home;
