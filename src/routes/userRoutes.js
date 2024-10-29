import express from 'express'
import UserController from '../controllers/userController.js';

const routes = express.Router();

routes.get('/users', UserController.getAllUsers);
routes.post('/users', UserController.createUser)

export default routes;
