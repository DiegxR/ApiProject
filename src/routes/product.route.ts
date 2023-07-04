import { Router } from 'express';
/* import UserModel from '../models/users' */
import {
  getUsers,
  getUserById,
  signIn,
} from '../Controllers/users.controllers';
import { createProduct } from '../Controllers/product.controllers';

const productsRouter = Router();

productsRouter.post('/createProduct', createProduct);

productsRouter.get('/getProduct', getUsers);

productsRouter.get('/getUser/:id', getUserById);

productsRouter.post('/login', signIn);

export default productsRouter;
