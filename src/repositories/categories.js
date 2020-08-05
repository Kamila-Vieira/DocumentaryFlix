import config from '../config';

const URL_CATEGORIES = `${config.URL}/categorias`;

/* function create() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (answerServer) => {
      if (answerServer.ok) {
        const answer = await answerServer.json();
        return answer;
      }
      throw new Error('Não foi possível pegar os dados do servidor!');
    });
}
 */
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
};
