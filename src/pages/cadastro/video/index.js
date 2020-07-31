import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroVideo(){
    const initialValue = {
        titulo:'',
        link:'',
        imagem:'',
        categoria:'',
        descricao:'',
    }

    const [videos, setVideos] = useState([]);

    const [values, setValues] = useState(initialValue);

function setValue(chave, valor) { 
    setValues({
         ...values,
         [chave]: valor,
    })  
}
function handleChange(evento) {
    setValue(
      evento.target.getAttribute('name'),
      evento.target.value
    );
  } 
    return(
        <PageDefault>
            <h1>Cadastro de Vídeos</h1>
            
            <form onSubmit={function submeter(evento){
                evento.preventDefault();
                setVideos([
                    ...videos,
                    values
                ]);

                setValues(initialValue)
            }}>
                <FormField 
                    label="Título do Vídeo"
                    type="text"
                    name="titulo"
                    value={values.titulo}
                    onChange={handleChange}
                />
                <FormField
                    label="Link do Vídeo"
                    type="url"
                    name="link"
                    value={values.link}
                    onChange={handleChange}
                />
                <FormField
                    label="Link da imagem do Vídeo"
                    type="url"
                    name="imagem"
                    value={values.imagem}
                    onChange={handleChange}
                />
                <FormField
                    label="Categoria"
                    type="list"
                    name="categoria"
                    value={values.categoria}
                    onChange={handleChange}
                />
                <FormField
                    label="Descrição"
                    type="text"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />
                <br/>
                <button className="ButtonLink">
                        Cadastrar
                </button>

            </form>
            
            <Link className="ButtonLink" to="/cadastro/categoria">
                Ir para Cadastro de Categoria
            </Link>
        </PageDefault>
    )
  }

  export default CadastroVideo;