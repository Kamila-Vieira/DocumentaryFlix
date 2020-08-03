import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroVideo() {
  const initialValue = {

    titulo: '',
    link: '',
    imagem: '',
    categoria: '',
    descricao: '',
  };

  /*   const selectId = `id_${categoria}`;
 */
  const [videos, setVideos] = useState([]);

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

      <form onSubmit={function submeter(evento) {
        evento.preventDefault();
        setVideos([
          ...videos,
          values,
        ]);

        setValues(initialValue);
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
          name="link"
          value={values.link}
          onChange={handleChange}
        />
        <FormField
          label="link da Imagem do Vídeo"
          type="url"
          name="imagem"
          value={values.imagem}
          onChange={handleChange}
        />
        <FormField
          label="Categoria"
          type="categoria"
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
        <Button className="ButtonLink">
          Cadastrar
        </Button>
      </form>
      <br />

    </PageDefault>
  );
}

export default CadastroVideo;
