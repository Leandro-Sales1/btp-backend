import jwt from 'jsonwebtoken';
import 'dotenv/config'

export default function createJWT(payload) {
  const tokenJWT = jwt.sign({ data: payload }, process.env.JWT_SECRET,
    { expiresIn: "2h" })

  return tokenJWT;
}
