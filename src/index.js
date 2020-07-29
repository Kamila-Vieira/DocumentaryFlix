import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';

const NaoExiste = () => (<div>Página 404</div>)
ReactDOM.render(
 <BrowserRouter>
    <Switch>
      < Route path="/" component={Home} exact/>
      < Route path="/cadastro/video" component={CadastroVideo} />
      {/* erro 404: QUANDO A PAGINA NÃO EXISTIR*/}
      < Route component={NaoExiste} /> 
    </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);


