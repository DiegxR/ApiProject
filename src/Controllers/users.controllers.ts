import bcrypt from "bcrypt";
import { Request, Response } from "express";
import UserModel from "../models/users";
import { generateToken } from "../routes/auth";

export const createUser = async (req: Request, res: Response) => {
  try {
    let hashedPassword = "";
    const { name, password, email, phone } = req.body;

    if (!password) {
      throw new Error("debe ingresar una contraseña");
    } else {
      hashedPassword = bcrypt.hashSync(password, 10); // Encripta la contraseña
    }

    const user = await UserModel.create({
      name,
      password: hashedPassword,
      email,
      phone,
    });

    res.status(200).json(user.dataValues);
  } catch (error: any) {
    res.status(400).json(error);
  }
};

export const getUsers = async (_req: Request, res: Response) => {
  const users = await UserModel.findAll();
  res.status(200).json(users);
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(id);
  const user = await UserModel.findAll({
    where: {
      id: id,
    },
  });
  res.status(200).json(user);
};

export const signIn = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ msg: "Please. Send your email and password" });
  }

  let user = await UserModel.findOne({ where: { email } });
  if (!user) {
    return res.status(400).json({ msg: "The User does not exists" });
  }

  const isMatch = bcrypt.compareSync(password, user.password);
  if (isMatch) {
    let UserAuth = {
      id: user.dataValues.id,
      name: user.dataValues.name,
      email: user.dataValues.email,
      phone: user.dataValues.phone,
      token: generateToken(user),
    };
    return res.status(200).json(UserAuth);
  }

  return res.status(400).json({
    msg: "The email or password are incorrect",
  });
};
