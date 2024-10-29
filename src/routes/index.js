import express from "express";
import userRoutes from './userRoutes.js'

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Hello World"));
  app.use(express.json(), userRoutes)
}

export default routes;
