import app from "./src/app.js";
import 'dotenv/config'



app.listen(process.env.API_PORT, () => {
  console.log("server online!");
});
