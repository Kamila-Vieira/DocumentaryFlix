import { config } from "dotenv";
import jsonServer from "json-server";

config();
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const port = process.env.SERVER_PORT || 8000;
const host = process.env.SERVER_HOST || "localhost";

server.use(middlewares);
server.use(router);

server.listen(port, host, () => {
  const baseUrl = `http://${host}:${port}`;
  console.log(`
  JSON Server is running in ${baseUrl}
  Access categories from ${baseUrl}/categories
  Access videos from ${baseUrl}/videos
  Access banner from ${baseUrl}/banner_highlight
  `);
});
