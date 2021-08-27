//import modules
require("dotenv").config({ path: "./src/config/.env" });
import express, { json, urlencoded } from "express";
import morgan from "morgan";
import exphbs from "express-handlebars";
import path from "path";

//express server
const app = express();

//Global variables
export const PORT = process.env.PORT || 3000;

//views
app.set("views", path.join(__dirname, "/views"));
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    helpers: require("./lib/handlebars"),
  })
);
app.set("view engine", ".hbs");

//Middlewares
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(morgan("dev"));

//Public
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  next();
});

//routes
app.use(require("./routes/auth.routes"));
app.use(require("./routes/user.routes"));
app.use(require("./routes/netflix.routes"));

export default app;
