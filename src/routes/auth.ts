/* import UserModel from "../models/users"; */
import jwt from 'jsonwebtoken';
import { Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import { User as UserModel } from '../db';

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'clave1561254',
};

export default new Strategy(opts, async (payload, done) => {
  try {
    const user = await UserModel.findOne({ where: { email: payload.email } });
    if (user) {
      return done(null, user);
    }
    return done(null, false);
  } catch (error) {
    console.log(error);
  }
});

export const generateToken = (user: any) => {
  const payload = { id: user.id, email: user.email };
  const secretKey = 'clave1561254'; // Reemplaza por una clave secreta más segura
  const options = { expiresIn: '1h' }; // Opcional: puedes personalizar la expiración del token
  return jwt.sign(payload, secretKey, options);
};
