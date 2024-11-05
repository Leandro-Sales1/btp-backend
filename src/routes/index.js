import express from "express";
import userRoutes from './userRoutes.js'
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from "../../swaggerConfig.js";

const routes = (app) => {
  const CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css"

  app.use(express.json())
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs, {
    customCss:
      '.swagger-ui .opblock .opblock-summary-path-description-wrapper { align-items: center; display: flex; flex-wrap: wrap; gap: 0 10px; padding: 0 10px; width: 100%; }',
    customCssUrl: CSS_URL,
  }));

  app.get("/", (req, res) => {
    res.redirect("/api-docs");
  });

  app.use(userRoutes)
}

export default routes;
