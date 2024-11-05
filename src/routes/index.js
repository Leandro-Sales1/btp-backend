import express from "express";
import userRoutes from './userRoutes.js'
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from "../../swaggerConfig.js";

const routes = (app) => {
  app.use(express.json())
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

  app.get("/", (req, res) => {
    res.redirect("/api-docs");
  });

  app.use(userRoutes)
}

export default routes;
