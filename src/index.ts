import express from "express";
import users from "./routes/users";
import { sequelize } from "./db";
import passportMiddleware from "./routes/auth";
import passport from "passport";
import cors from "cors";
import morgan from "morgan";
import productsRouter from "./routes/product.route";
/* import session from "express-session"; */
/* const SequelizeStore = require("connect-session-sequelize")(session.Store); */
const app = express();
const PORT = 3000;

/* const sessionStore = new SequelizeStore({
  db: sequelize, // Utiliza tu instancia de Sequelize
}); */
app.use(
  cors({
    origin: [
      "http://localhost:19006",
    ],
    credentials: true,
    methods: "GET, POST, OPTIONS, PUT, DELETE, PATCH",
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept",
  })
);
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
passport.use(passportMiddleware);


/* app.use(
  session({
    secret: "mi_secreto",
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
  })
); */

/* sessionStore.sync(); */

app.use(passport.initialize()); // Inicializa Passport.js

app.use("/users", users);
app.use("/product", productsRouter);

sequelize
  .sync({ alter: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
