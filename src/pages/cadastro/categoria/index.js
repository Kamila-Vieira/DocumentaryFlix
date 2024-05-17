import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import useForm from "../../../hooks/useForm";
import categoriesRepository from "../../../repositories/categories";
import utils from "../../../utils";

function CadastroCategoria() {
  const initialValue = {
    title: "",
    description: "",
    color: "",
  };

  const { handleChange, values, clearForm } = useForm(initialValue);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      categoriesRepository.getAll().then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      });
    }, 3 * 1000);
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
          <Link className="ButtonLink" to="/cadastro/video">
            Cadastro de Vìdeos
          </Link>
        </div>
      </div>
      <br />

      <h1>
        Cadastrar Categoria:&nbsp;
        {values.title}
      </h1>

      <form
        onSubmit={function submeter(event) {
          event.preventDefault();
          setCategories([...categories, values]);

          categoriesRepository.create({
            id: utils.generateUUID(),
            title: values.title,
            description: values.description,
            color: utils.hexToRgb(values.color),
          });
          clearForm();
        }}
      >
        <FormField
          label="Nome da Categoria"
          type="textarea"
          name="title"
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />
        <Button>Cadastrar</Button>
      </form>
      <br />

      {categories.length === 0 && <div>Loading...</div>}

      <ul>
        {categories.map((category) => (
          <li key={`${category.title}`}>{category.title}</li>
        ))}
      </ul>
      <br />
    </PageDefault>
  );
}

export default CadastroCategoria;
