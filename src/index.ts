import express from "express";
import users from "./routes/users";
import { sequelize } from "./db";
import auth from "./routes/auth";
import passport from "passport";
import session from "express-session";
/* const SequelizeStore = require("connect-session-sequelize")(session.Store); */
const app = express();
const PORT = 3000;

/* const sessionStore = new SequelizeStore({
  db: sequelize, // Utiliza tu instancia de Sequelize
}); */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

auth(passport);

app.use(
  session({
    secret: "mi_secreto",
    resave: false,
    saveUninitialized: false,
    /* store: sessionStore,  */
  })
);

/* sessionStore.sync(); */

app.use(passport.initialize()); // Inicializa Passport.js

/* app.use(passport.session()); */
app.use("/users", users);

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
