import { randomBytes, scryptSync } from "crypto";

export default function passWordHashAndSalt(body) {
  const passWord = body.passWord
  const passWordSalt = randomBytes(16).toString("hex");
  const passWordHash = scryptSync(passWord, passWordSalt, 64).toString("hex");
  //adding the new props
  body = { ...body, passWordHash, passWordSalt };
  
  //removing the passWord from the req.body
  delete body.passWord
  return body;
}
