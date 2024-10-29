import express from 'express'
import UserController from '../controllers/userController.js';

const routes = express.Router();

routes.get('/users', UserController.getAllUsers);

export default routes;
