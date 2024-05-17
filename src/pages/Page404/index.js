import React from "react";
import Flappylogo from "../../assets/img/Flappylogo.png";
import PageDefault from "../../components/PageDefault";

function NaoExiste() {
  return (
    <PageDefault>
      <div id="Page404">
        <h1>Error 404:</h1>
        <h2>Desculpe, a página requisitada não pode ser encontrada!</h2>
        <h3>Mas, você pode conhecer o mundo divertido de Flappy Bird Clicando na imagem abaixo!</h3>
        <br />
        <a href="https://mariosouto.com/flappy-bird-devsoutinho/">
          <img src={Flappylogo} alt="Flappy Bird! by Mario Souto" />
          <br />
        </a>
        <p>
          Flappy Bird by &nbsp;
          <a href="https://github.com/omariosouto">Mario Souto</a>
        </p>
        <br />
        <h3>Ou, Você pode ir para a Home clicando no nosso logo lá em cima!</h3>
      </div>
    </PageDefault>
  );
}

export default NaoExiste;
