import { DataTypes } from "sequelize"
export type nameUser = 'Diego' | 'Jhon'
export type idType = DataTypes.UUID4

export interface UsersEntry {
    name: nameUser,
    lastName: string,
    email: string,
    phone: number
}