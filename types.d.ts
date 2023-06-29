import passport from "passport";
import { DataTypes } from "sequelize"
export type nameUser = 'Diego' | 'Jhon'
export type idType = DataTypes.UUID4
export type passport = passport

export interface UsersEntry {
    name: nameUser,
    password: string,
    email: string,
    phone: number
}