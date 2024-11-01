import 'dotenv/config'
import jwt from 'jsonwebtoken'


export default function checkJWT(headers) {
  // getting only the token, removing the Bearer
  const token = JSON.parse(headers.authorization).split(' ')[1];
  try {
    const payloadToken = jwt.verify(token, process.env.JWT_SECRET);
    return payloadToken;

  } catch (error) {
    throw new Error(error);
  }
}
