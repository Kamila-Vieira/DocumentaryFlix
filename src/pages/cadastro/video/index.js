import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import useForm from "../../../hooks/useForm";
import videosRepository from "../../../repositories/videos";
import categoriesRepository from "../../../repositories/categories";

function CadastroVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ title }) => title);
  const { handleChange, values } = useForm({
    title: "",
    link: "",
    category: "",
    description: "",
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
            Home
          </Link>
        </div>
        <div>
          <Link className="ButtonLink" to="/cadastro/categoria">
            Cadastro de Categoria
          </Link>
        </div>
      </div>
      <br />

      <h1>Cadastro de Vídeos</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();

          const categoriaEscolhida = categories.find((categoria) => {
            return categoria.title === values.categoria;
          });

          videosRepository
            .create({
              title: values.title,
              url: values.url,
              categoryId: categoriaEscolhida.id,
            })
            .then(() => {
              history.push("/");
            });
        }}
      >
        <FormField
          label="Título"
          type="text"
          name="title"
          value={values.title}
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
          name="category"
          value={values.category}
          onChange={handleChange}
          suggestions={categoryTitles}
        />
        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />
        <Button type="submit">Cadastrar</Button>
      </form>
      <br />
    </PageDefault>
  );
}

export default CadastroVideo;
