import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';

function CadastroVideo(){
    return(
        <PageDefault>
            <h1>Cadastro de Vídeos</h1>
            <Button as={Link} to="/cadastro/categoria">
                Cadastrar nova categoria
            </Button>
        </PageDefault>
    )
  }


  export default CadastroVideo;