import { Router } from "express";
/* import UserModel from '../models/users' */
import { getUsers, createUser, getUserById, signIn } from "../Controllers/users.controllers";

const usersRouter = Router();

usersRouter.post("/createUser", createUser);

usersRouter.get("/getUsers",/* passport.authenticate("jwt", { session: false }), */getUsers);

usersRouter.get("/getUser/:id", getUserById);

usersRouter.post("/login", signIn);

export default usersRouter;
