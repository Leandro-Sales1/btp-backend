import express from 'express';
import routes from './routes/index.js';
import DBConnection from './config/DBConnect.js';

const connection = await DBConnection();

connection.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

connection.once("open", () => {
  console.log("DB Connection ready!");
})

const app = express();
routes(app);

export default app;
