import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria(){

    const inValue = {
        name:'',
        description:'',
        color:'#000',
    }

    const [categories, setCategories] = useState([]);

    const [values, setValues] = useState(inValue);

function setValue(key, valueCategory) { 
    setValues({
         ...values,
         [key]: valueCategory,
    })  
}

    return(
        <PageDefault>
            <h1>Cadastrar Categoria: {values.nome}</h1>
            
            <form onSubmit={function submit(event){
                event.preventDefault();
                setCategories([
                    ...categories,
                    values
                ]);
                
            }}>
                <div>
                    <label>Nome da Categoria: 
                        <input 
                            type="text" 
                            value={values['nome']}
                            onChange={function showCategory(event){
                                setValue('nome', event.target.value);
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>Descrição: 
                        <textarea 
                            type="text" 
                            value={values.description}
                            onChange={function showCategory(event){
                                //setValue('description', event.target.value);
                            }}
                        />
                    </label> 
                </div>
                <div>
                    <label>Cor: 
                        <input 
                            type="color" 
                            value={values.color}
                            onChange={function showCategory(event){
                                //setValue('color', event.target.value);
                            }}
                        />
                    </label> 
                </div>
                <button >
                        Cadastrar
                </button>
                
                <ul>
                    {categories.map((category, indice) => {
                        return (
                            <li key={category+indice}>
                                {category}
                            </li>
                        )
                    })}
                </ul>

            
            </form>   

            <Link className="ButtonLink" to="/">
                Voltar para Home
            </Link>

        </PageDefault>
    )
  }

  export default CadastroCategoria;