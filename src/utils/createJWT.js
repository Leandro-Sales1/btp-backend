import jwt from 'jsonwebtoken';
import 'dotenv/config'

export default function createJWT(payload) {
  const tokenJWT = jwt.sign(payload, process.env.JWT_SECRET)

  return tokenJWT;
}
