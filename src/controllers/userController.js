import { user } from '../models/user.js';
import createJWT from '../utils/createJWT.js';
import passWordChecker from '../utils/passWordChecker.js';
import passWordHash from '../utils/passwordHashAndSalt.js';

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
        const newUserWithHash = passWordHash(req.body)
        const newUser = await user.create(newUserWithHash);
        const tokenJWT = createJWT(newUser.userName)
        res.status(201).json({ message: "criado com sucesso", tokenJWT });
      } else {
        res.status(400).json({ message: "usuário já existente" });
      }
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static async AuthorizeUser(req, res) {
    try {
      const userInDB = await user.find({ userName: req.body.userName })
      if (userInDB) {
        const authenticated = passWordChecker(req.body.passWord, userInDB[0].passWordHash);
        if (authenticated) {
          const tokenJWT = createJWT(userInDB[0].userName)
          res.status(200).json({ message: "usuário autenticado", tokenJWT });
        }
      } else {
        res.status(400).json({ message: "usuário ou senha incorretos" });
      }

    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  }
}

export default UserController;
