import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import useForm from "../../../hooks/useForm";
import config from "../../../config";
import categoriesRepository from "../../../repositories/categories";

function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return {
    R: result ? parseInt(result[1], 16) : 255,
    G: result ? parseInt(result[2], 16) : 255,
    B: result ? parseInt(result[3], 16) : 255,
    O: 1,
    HEX: hex,
  };
}

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
      fetch(config.URL).then(async (answerServer) => {
        const answer = await answerServer.json();
        setCategories([...answer]);
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
            title: values.title,
            description: values.description,
            color: hexToRgb(values.color),
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
