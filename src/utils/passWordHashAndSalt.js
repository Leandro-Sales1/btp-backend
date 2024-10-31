import { scryptSync } from "crypto";
import 'dotenv/config'

export default function passWordHash(body) {
  const passWord = body.passWord
  const passWordSalt = process.env.PASSWORD_SALT;
  const passWordHash = scryptSync(passWord, passWordSalt, 64).toString("hex");
  //adding the new props
  body = { ...body, passWordHash };

  //removing the passWord from the req.body
  delete body.passWord
  return body;
}
