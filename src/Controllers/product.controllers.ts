/* import { ProductEntry } from "../../types"; */
import { Product as ProductModel, /* Ingredients as IngredientModel */ } from '../db';
import { Request, Response } from 'express';

/* export const getUsers = async (req: Request, res: Response) => {
    let products = await ProductModel.findAll();
    res.status(200).json(products);
};
 */
export const createProduct = async (req: Request, res: Response) => {
  const { name, ingredients } = req.body;
 /*  let ingredientsAsoiation = await IngredientModel.findAll({
    where: {
      id: ingredients,
    },
  }); */

  try {
    let products = await ProductModel.create({ name, ingredients });
    /* products.addIngredients(ingredientsAsoiation) */
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error });
  }
};
