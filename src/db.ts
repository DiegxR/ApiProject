import { Sequelize } from 'sequelize';
import UserModel from './models/users';
import ProductModel from './models/produtc.models';
import IngredientModel from './models/ingredients.models';

export const sequelize = new Sequelize(
  `postgres://postgres:123456789@localhost/postgres`,
  {
    logging: false,
    native: false,
  }
);

UserModel(sequelize);
ProductModel(sequelize);
IngredientModel(sequelize);

//relaciones
const { User, Product, Ingredients } = sequelize.models;
Product.belongsToMany(Ingredients, { through: 'ProductIngredient' });
Ingredients.belongsToMany(Product, { through: 'ProductIngredient' });

export { User, Product, Ingredients };
