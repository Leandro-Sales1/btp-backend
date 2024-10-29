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
}

export default UserController;
