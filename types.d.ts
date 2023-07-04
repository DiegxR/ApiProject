import passport from 'passport';
import { DataTypes,Sequelize } from 'sequelize';
export type idType = DataTypes.UUID4;
export type passport = passport;
export type sequelize = Sequelize;
export interface UsersEntry {
  name: string;
  password: string;
  email: string;
  phone: number;
}
export interface ProductEntry {
  id: number;
  name: string;
  ingredients: string
}
