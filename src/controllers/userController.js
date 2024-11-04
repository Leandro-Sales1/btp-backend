import { user } from '../models/user.js';
import checkJWT from '../utils/checkJWT.js';
import createJWT from '../utils/createJWT.js';
import passWordChecker from '../utils/passWordChecker.js';
import passWordHash from '../utils/passWordHash.js';

class UserController {
  static async createUser(req, res) {
    try {
      const userDB = await user.findOne({ "userName": req.body.userName })
      if (!userDB) {
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
      const userInDB = await user.findOne({ userName: req.body.userName })
      if (userInDB) {
        const authenticated = passWordChecker(req.body.passWord, userInDB.passWordHash);
        if (authenticated) {
          const tokenJWT = createJWT(userInDB.userName)
          res.status(200).json({ message: "usuário autenticado", tokenJWT });
        }
      } else {
        res.status(400).json({ message: "usuário ou senha incorretos" });
      }
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static async isAuthorized(req, res) {
    try {
      const payloadtokenJWT = checkJWT(req.headers);
      if (payloadtokenJWT) {
        const userInDB = await user.findOne({ userName: payloadtokenJWT })
        if (userInDB) {
          res.status(200).json({ message: "usuário autorizado", userInDB });
        }
      } else {
        res.status(400).json({ message: "usuário ou senha incorretos" });
      }
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static async updateUser(req, res) {
    try {
      const payloadtokenJWT = checkJWT(req.headers);

      if (payloadtokenJWT) {
        var newUserWithHash = req.body
        if (req.body.passWord) {
          newUserWithHash = passWordHash(req.body)
        }

        const userInDB = await user.findOneAndUpdate(
          { userName: payloadtokenJWT },
          newUserWithHash,
          { new: true })

        if (userInDB) {
          res.status(200).json({ message: "usuário atualizado com sucesso", userInDB });
        }
      } else {
        res.status(400).json({ message: "Houve algum erro com a atualização do usuário" });
      }
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static async deleteUser(req, res) {
    try {
      const payloadtokenJWT = checkJWT(req.headers);

      if (payloadtokenJWT) {
        const userInDB = await user.findOneAndDelete({ userName: payloadtokenJWT })

        res.status(200).json({ message: "usuário deletado com sucesso", userInDB });

      } else {
        res.status(400).json({ message: "Houve algum erro ao encontrar o usuário a deletar" });
      }
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  }
}

export default UserController;
