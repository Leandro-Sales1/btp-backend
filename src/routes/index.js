import express from "express";
import userRoutes from './userRoutes.js'
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from "../../swaggerConfig.js";

const routes = (app) => {

  app.get("/", (req, res) => {
    res.redirect("/api-docs");
  });

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  
  app.use(express.json(), userRoutes)
}

export default routes;
