import config from "../config";

const URL_BANNER = `${config.URL}/banner_highlight`;

function getOne() {
  return fetch(`${URL_BANNER}`).then(async (answerServer) => {
    if (answerServer.ok) {
      const answer = await answerServer.json();
      return answer;
    }
    throw new Error("Não foi possível pegar os dados do servidor!");
  });
}

export default {
  getOne,
};
