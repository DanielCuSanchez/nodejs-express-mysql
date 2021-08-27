require("dotenv").config({ path: "./src/config/.env" });
import express, { json } from "express";
import morgan from "morgan";
import exphbs from "express-handlebars";
import path from "path";
//import routes
const app = express();

//views
app.set("views", path.join(__dirname, "/views"));
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
  })
);

//Middlewares
app.use(json());
app.use(morgan("dev"));

//routes

//app.use("/api/users");

//Global variables
export const PORT = process.env.PORT || 3000;

export default app;
