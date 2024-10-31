import { scryptSync, timingSafeEqual } from "crypto";
import 'dotenv/config'


export default function passWordChecker(passWord, userInDB) {
  const passWordSalt = process.env.PASSWORD_SALT;
  const testHash = scryptSync(passWord, passWordSalt, 64)
  const userHash = Buffer.from(userInDB, "hex");


  const authenticated = timingSafeEqual(testHash, userHash);
  return authenticated;
}


