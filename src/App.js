import React from 'react';
import Menu from './components/Menu';
import dadosIniciais from './components/data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div style = {{ background:"#141414"}}>
      <Menu/>
      
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Afinal, o que é React JS? Neste vídeo, Vanessa Tonini e Mario Souto explicam isto para você falando sobre como esta ferramenta surgiu, para que ela serve, quais são suas aplicações e relação com outras ferramentas e como começar a trabalhar com ele."}
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
      <Footer/>    

    </div>
  );
}

export default App;
