import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

function CadastroVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const { handleChange, values, clearForm } = useForm({
    titulo: '',
    link: '',
    categoria: '',
    descricao: '',
  });

  useEffect(() => {
    categoriesRepository.getAll().then((categoriesFromServer) => {
      setCategories(categoriesFromServer);
    });
  }, []);

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
          <Link className="ButtonLink" to="/cadastro/categoria">
            Ir para Cadastro de Categoria
          </Link>
        </div>
      </div>
      <br />

      <h1>Cadastro de Vídeos</h1>

      <form onSubmit={function submeter(event) {
        event.preventDefault();

        const categoriaEscolhida = categories.find((categoria) => categoria.titulo === values.categoria);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            history.push('/');
            // alert('Vídeo cadastrado com sucesso!');
          });

        clearForm();
      }}
      >
        <FormField
          label="Título"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />
        <FormField
          label="Link do Vídeo"
          type="url"
          name="url"
          value={values.url}
          onChange={handleChange}
        />
        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}

           /*  <label htmlFor={selectId}>Country</label>
            <select id={selectId} name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
            </select> */
        />
        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        <Button type="submit">
          Cadastrar
        </Button>
      </form>
      <br />

    </PageDefault>
  );
}

export default CadastroVideo;
