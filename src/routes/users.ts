import { Router } from "express";
/* import UserModel from '../models/users' */
import { getUsers, createUser, getUserById } from "../services/users";
import passport from "passport";
import UserModel from "../models/users";
import { generateToken } from "./auth";
const usersRouter = Router();

usersRouter.post("/createUser", (req, res) => {
  const { name, password, email, phone } = req.body;

  const userCreate = createUser({ name, password, email, phone });
  res.json(userCreate);
});

usersRouter.get("/getUsers", async (_, res) => {
  const user = await getUsers();
  res.json(user);
});

usersRouter.get("/getUser/:id", async (req, res) => {
  const { id } = req.params;
  const user = await getUserById(id);
  res.json(user);
});

usersRouter.post("/login", passport.authenticate("local"), async (req, res) => {
  try {
    let token;
    const user = req.body;
    const User = await UserModel.findOne({ where: { email: user.email } });
    if (User) {
      token = generateToken(User);
    }

    res.status(200).json({ ...User?.dataValues, token });
  } catch (error) {
    res.status(400).json(error);
  }
});

export default usersRouter;
