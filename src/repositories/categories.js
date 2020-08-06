import config from '../config';

const URL_CATEGORIES = `${config.URL}/categorias`;

function create(objetoDaCategoria) {
  return fetch(`${URL_CATEGORIES}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(objetoDaCategoria),
  })
    .then(async (answerServer) => {
      if (answerServer.ok) {
        const answer = await answerServer.json();
        return answer;
      }
      throw new Error('Não foi possível cadastrar os dados no servidor!');
    });
}
function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (answerServer) => {
      if (answerServer.ok) {
        const answer = await answerServer.json();
        return answer;
      }
      throw new Error('Não foi possível pegar os dados do servidor!');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (answerServer) => {
      if (answerServer.ok) {
        const answer = await answerServer.json();
        return answer;
      }
      throw new Error('Não foi possível pegar os dados do servidor!');
    });
}

export default {

  getAllWithVideos,
  getAll,
  create,
};
