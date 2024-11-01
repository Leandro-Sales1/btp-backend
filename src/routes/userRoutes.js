import express from 'express'
import UserController from '../controllers/userController.js';

const routes = express.Router();

routes.get('/users', UserController.getAllUsers);
routes.get('/auth', UserController.isAuthorized);
routes.post('/users', UserController.createUser);
routes.post('/login', UserController.AuthorizeUser);
routes.put('/users', UserController.updateUser);


export default routes;
