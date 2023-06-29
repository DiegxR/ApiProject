import { passport } from "../../types";
import UserModel from "../models/users";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { Strategy as LocalStrategy } from "passport-local";

const auth = (passport: passport) => {
  
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email", // Campo del formulario para el correo electrónico
        passwordField: "password", // Campo del formulario para la contraseña
      },
      async (mail: any, password: any, done: any) => {
        try {
          // Encuentra al usuario en la base de datos por correo electrónico
          const user = await UserModel.findOne({ where: { email: mail } });

          // Si no se encuentra el usuario o la contraseña no coincide, devuelve un mensaje de error
          if (!user || !bcrypt.compareSync(password, user.password)) {
            return done(null, false, { message: "Credenciales inválidas" });
          }

          // Si todo está bien, devuelve el usuario autenticado
          return done(null, user);
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  passport.serializeUser((user: any, done: any) => {
    // Almacena la identificación única del usuario en la sesión
    console.log(user.email);

    done(null, user.email);
  });

  passport.deserializeUser(async (email: any, done: any) => {
    console.log("mail del usuario", email);
    try {
      // Recupera el objeto de usuario utilizando la identificación almacenada en la sesión
      const user = await UserModel.findOne({ where: { email: email } });
      done(null, user);
    } catch (error) {
      done(error);
    }
  });

};

export const generateToken = (user: any) => {
  const payload = { id: user.id, email: user.email };
  const secretKey = 'mi_secreto'; // Reemplaza por una clave secreta más segura
  const options = { expiresIn: '1h' }; // Opcional: puedes personalizar la expiración del token
  return jwt.sign(payload, secretKey, options);
};

export default auth;
