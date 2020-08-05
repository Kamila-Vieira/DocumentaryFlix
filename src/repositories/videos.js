import config from '../config';

const URL_VIDEOS = `${config.URL}/videos`;

function create(objetoDoVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  })
    .then(async (answerServer) => {
      if (answerServer.ok) {
        const answer = await answerServer.json();
        return answer;
      }
      throw new Error('Não foi possível cadastrar os dados no servidor!');
    });
}

export default {

  create,
};
