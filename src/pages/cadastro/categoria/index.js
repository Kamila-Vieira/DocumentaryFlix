import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const initialValue = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categories, setCategories] = useState([]);

  const [values, setValues] = useState(initialValue);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }
  function handleChange(evento) {
    setValue(
      evento.target.getAttribute('name'),
      evento.target.value,
    );
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://documentaryflix.herokuapp.com/categorias';

    fetch(URL)
      .then(async (answerServer) => {
        const answer = await answerServer.json();
        setCategories([
          ...answer,
        ]);
      });

    /* setTimeout(() => {
      setCategories([
        ...categories,
        {
          id: 1,
          nome: 'Tecnologia',
          descricao: 'Documentários sobre o mundo da tecnologia',
          cor: '#2A7AE4',
        },
        {
          id: 2,
          nome: 'Ciência e Biologia',
          descricao: 'Documentários sobre a ciência e o universo',
          cor: '#00C86F',
        },
        {
          id: 3,
          nome: 'Espiritualidade',
          descricao: 'Documentários sobre a a espiritualidade universal',
          cor: '#9cd33b',
        },
        {
          id: 4,
          nome: 'Arte',
          descricao: 'Documentários sobre a arte como um todo',
          cor: '#6b5be2',
        },
        {
          id: 5,
          nome: 'História',
          descricao: 'Documentários sobre a do Brasil e do mundo',
          cor: 'red',
        },
        {
          id: 6,
          nome: 'Sociologia e Filosofia',
          descricao: 'Documentários socialistas e filosóficos',
          cor: 'pink',
        },
        {
          id: 7,
          nome: 'Música',
          descricao: 'Documentários sobre a arte da música',
          cor: 'orange',
        },
      ]);
    }, 2 * 1000); */
  },
  []);

  return (
    <PageDefault>

      <br />
      <div className="buttons">
        <div>
          <Link className="ButtonLink" to="/">
            Voltar para Home
          </Link>
        </div>
        <div>
          <Link className="ButtonLink" to="/cadastro/video">
            Voltar para Cadastro de Vìdeos
          </Link>
        </div>
      </div>
      <br />

      <h1>
        Cadastrar Categoria:&nbsp;
        {values.nome}
      </h1>

      <form onSubmit={function submeter(evento) {
        evento.preventDefault();
        setCategories([
          ...categories,
          values,
        ]);
        setValues(initialValue);
      }}
      >
        <FormField
          label="Nome"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
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
        <Button>
          Cadastrar
        </Button>
      </form>

      <br />
      {categories.lenght === 0 && (
      <div>
        Loading ...

      </div>
      )}

      <ul>
        {categories.map((category) => (
          <li key={`${category.nome}`}>
            {category.nome}
          </li>
        ))}
      </ul>
      <br />

    </PageDefault>
  );
}

export default CadastroCategoria;
