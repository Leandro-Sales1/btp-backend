import { user } from '../models/user.js';
import passWordHashAndSalt from '../utils/passwordHashAndSalt.js';

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
      const userDB = await user.find({ "userName": req.body.userName })
      if (!userDB.length > 0) {
        const newUserWithHash = passWordHashAndSalt(req.body)
        const newUser = await user.create(newUserWithHash);
        res.status(201).json({ message: "criado com sucesso", newUser });
      } else {
        res.status(400).json({ message: "usuário já existente" });
      }
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  }
}

export default UserController;
