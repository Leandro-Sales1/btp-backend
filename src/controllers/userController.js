import { user } from '../models/user.js';

class UserController {
  static async getAllUsers(req, res) {
    try {
      const usersList = await user.find({})
      res.status(200).json(usersList)

    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static async createUser(req, res) {
    try {
      const newUser = await user.create(req.body);
      res.status(201).json({ message: "criado com sucesso"});

    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  }
}

export default UserController;
