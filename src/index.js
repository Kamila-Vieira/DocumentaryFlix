import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';
import Flappylogo from './assets/img/Flappylogo.png';
import logoMain from './assets/img/logoMain.png';

const NaoExiste = () => (<div>
  <h1>Error 404:</h1>
  <h2>Desculpe, a página requisitada não pode ser encontrada!</h2>
  <h3>Conheça um mundo divertido com Flappy Bird!</h3>
  <h3>Clique na imagem abaixo e divirta-se!</h3>
  <br/>
  <a href="https://mariosouto.com/flappy-bird-devsoutinho/" >
    <img src={Flappylogo} alt="Flappy Bird! by Mario Souto"/>
  </a>
  <p>Flappy Bird by Mario Souto (https://github.com/omariosouto)</p>
  <h3>Ou, Você pode ir para a Home clicando no nosso logo:</h3>
  <a href="/">
    <img src={logoMain} align="center" width="300" height="50" alt="Logo DocumentaryFlix"/>
  </a>
  </div>)

ReactDOM.render(
 <BrowserRouter>
    <Switch>
      < Route path="/" component={Home} exact/>
      < Route path="/cadastro/video" component={CadastroVideo} />
      < Route path="/cadastro/categoria" component={CadastroCategoria} />
      {/* erro 404: QUANDO A PAGINA NÃO EXISTIR*/}
      < Route component={NaoExiste} /> 
    </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);


