import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria(){

    const initialValue = {
        nome:'',
        descricao:'',
        cor:'',
    }

    const [categories, setCategories] = useState([]);

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
            <h1>Cadastrar Categoria: {values.nome}</h1>
            
            <form onSubmit={function submiter(evento){
                evento.preventDefault();
                setCategories([
                    ...categories,
                    values
                ]);

                setValues(initialValue)
            }}>
                <FormField
                    label="Nome da Categoria"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição:"
                    type="????"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />
                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />
                <br/>
                <button className="ButtonLink">
                        Cadastrar
                </button>

            </form>
            <ul>
                {categories.map((category, indice) => {
                    return (
                        <li key={`${category}${indice}`}>
                            {category.nome}
                        </li>
                    )
                })}
            </ul>
            <div>
                <div>
                    <Link className="ButtonLink" to="/">
                        Voltar para Home
                    </Link>
                </div>
                <div>
                    <Link className="ButtonLink" to="/cadastro/video">
                        Ir para Cadastro de Vìdeos
                    </Link>
                </div>
            </div>

        </PageDefault>
    )
  }

  export default CadastroCategoria;