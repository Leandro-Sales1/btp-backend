import express from 'express'
import UserController from '../controllers/userController.js';

const routes = express.Router();

/**
 * @swagger
 * /auth:
 *   get:
 *     summary: Returns the user by sending the JWT token in the request's header
 *     security:
 *       - bearerAuth: []  
 *     responses:
 *       200:
 *         description: Ok
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: User's ID
 *                   example: "64fa1a4b6f78bb001c4f865d"
 *                 userName:
 *                   type: string
 *                   description: User's name
 *                   example: "João da Silva"
 *                 passWordHash:
 *                   type: string
 *                   description: User's password hash stored in the database
 *                   example: "$2b$10$abc123..."
 *                 balance:
 *                   type: object
 *                   description: User's balance
 *                   example: {"BRL": 100, "BTC": 2, "ETH": 5, "SOL": 0}
 *       401:
 *         description: Invalid or missing JWT token
 *       500:
 *         description: Request failed
 */
routes.get('/auth', UserController.isAuthorized);
/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *                 description: User's name
 *                 example: "João da Silva"
 *               passWord:
 *                 type: string
 *                 description: User's password
 *                 example: "1594758abc"
 *               balance:
 *                 type: object
 *                 description: User's balance
 *                 example: {"BRL": 100, "BTC": 2, "ETH": 5, "SOL": 0}
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "criado com sucesso"
 *                 tokenJWT:
 *                   type: string
 *                   example: "token"
 *       400:
 *         description: User already exist
 *       500:
 *         description: Request failed
 */
routes.post('/users', UserController.createUser);
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Sign in a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *                 description: User's name
 *                 example: "João da Silva"
 *               passWord:
 *                 type: string
 *                 description: User's password
 *                 example: "1594758abc"
 *     responses:
 *       200:
 *         description: Ok
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "usuário autenticado"
 *                 tokenJWT:
 *                   type: string
 *                   example: "token"
 *       400:
 *         description: Wrong username or password
 *       500:
 *         description: Request failed
 */
routes.post('/login', UserController.AuthorizeUser);
/**
 * @swagger
 * /users:
 *   put:
 *     summary: Modify a user by sending the JWT token in the request's header and the modifies in the body
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *                 description: New user's name
 *                 example: "João dos Santos"
 *     responses:
 *       200:
 *         description: Update Successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: User's ID
 *                   example: "64fa1a4b6f78bb001c4f865d"
 *                 userName:
 *                   type: string
 *                   description: User's name
 *                   example: "João dos Santos"
 *                 passWordHash:
 *                   type: string
 *                   description: User's password hash stored in the database
 *                   example: "$2b$10$abc123..."
 *                 balance:
 *                   type: object
 *                   description: User's balance
 *                   example: {"BRL": 100, "BTC": 2, "ETH": 5, "SOL": 0}
 *       400:
 *         description: Update error
 *       500:
 *         description: Request failed
 */
routes.put('/users', UserController.updateUser);
/**
 * @swagger
 * /users:
 *   delete:
 *     summary: Delete the user by sending the JWT token in the request's header
 *     security:
 *       - bearerAuth: []  
 *     responses:
 *       200:
 *         description: Ok
 *       401:
 *         description: Invalid or missing JWT token
 *       500:
 *         description: Request failed
 */
routes.delete('/users', UserController.deleteUser);


export default routes;
