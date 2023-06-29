import { UsersEntry, idType } from "../../types";
import bcrypt from "bcrypt";
import UserModel from "../models/users";
export const createUser = async ({
  name,
  password,
  email,
  phone,
}: UsersEntry) => {
  let user;
  try {
    let hashedPassword = "";
    if (password) {
      hashedPassword = bcrypt.hashSync(password, 10); // Encripta la contraseña
    }
    user = await UserModel.create({
      name,
      password: hashedPassword,
      email,
      phone,
    });
    console.log("auiii", user);
    return user;
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
  return user;
};

export const getUsers = async () => {
  const users = await UserModel.findAll();
  return users;
};

export const getUserById = async (id: idType) => {
  console.log(id);
  const user = await UserModel.findAll({
    where: {
      id: id,
    },
  });
  return user;
};
