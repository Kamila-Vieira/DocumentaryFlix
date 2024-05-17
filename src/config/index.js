const URL = window.location.hostname.includes("localhost")
  ? "http://localhost:8000"
  : "https://documentaryflix.herokuapp.com";

export default {
  URL,
};
