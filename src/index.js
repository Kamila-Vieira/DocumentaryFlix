import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';
import NaoExiste from './pages/Page404';

/*   const NaoExiste = () => (<div>Página 404</div>)
 */

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


