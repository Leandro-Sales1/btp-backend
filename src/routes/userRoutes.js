import express from 'express'
import UserController from '../controllers/userController.js';

const routes = express.Router();

routes.get('/users', UserController.getAllUsers);
routes.post('/users', UserController.createUser);
routes.post('/login', UserController.AuthorizeUser);

export default routes;
