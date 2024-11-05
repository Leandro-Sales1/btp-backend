import express from 'express';
import routes from './routes/index.js';
import DBConnection from './config/DBConnect.js';
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "../swaggerConfig.js";

const connection = await DBConnection();

connection.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

connection.once("open", () => {
  console.log("DB Connection ready!");
})


const app = express();

routes(app);
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


export default app;
