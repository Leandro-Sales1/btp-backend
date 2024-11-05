import express from "express";
import userRoutes from './userRoutes.js'
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from "../../swaggerConfig.js";

const routes = (app) => {
  app.use(express.json(), userRoutes)
  app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}

export default routes;
