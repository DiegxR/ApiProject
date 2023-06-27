import { UsersEntry, idType } from '../../types'
import UserModel from '../models/users'
export const createUser = async (User: UsersEntry) => {
    let user
    try {
        user = await UserModel.create(User)
        console.log("auiii", user);
        return user
    } catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
    }
    return user
}


export const getUsers = async () => {
    const users = await UserModel.findAll()
    return users
}


export const getUserById = async (id: idType) => {
    console.log(id)
     const user = await UserModel.findAll({
        where: {
            id: id
        }
     })
    return user
}

