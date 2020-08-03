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
    setTimeout(() => {
      setCategories([
        ...categories,
        values,
        {
          id: 1,
          nome: 'Tecnologia',
          descricao: 'Os melhores documentários sobre o mundo da tecnologia',
          cor: '#2A7AE4',
        },
        {
          id: 2,
          nome: 'Carreira: A tecnologia no empreendedorismo',
          descricao: 'Carreira melhores sobre a tecnologia',
          cor: '#00C86F',
        },
      ]);
    }, 4 * 1000);
  },
  []);

  return (
    <PageDefault>
      <h1>
        Cadastrar Categoria:
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
        <br />
      </form>
      <ul>
        {categories.map((category) => (
          <li key={`${category.nome}`}>
            {category.nome}
          </li>
        ))}
      </ul>

      <div>
        Loading ...
        {' '}
      </div>
      <br />

      <div className="buttons">
        <div>
          <Link className="ButtonLink" to="/">
            Ir para Home
          </Link>
        </div>
        <div>
          <Link className="ButtonLink" to="/cadastro/video">
            Ir para Cadastro de Vìdeos
          </Link>
        </div>
      </div>

    </PageDefault>
  );
}

export default CadastroCategoria;
