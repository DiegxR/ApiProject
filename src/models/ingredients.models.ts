import { DataTypes } from 'sequelize';
import {
  Model,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import { sequelize } from '../../types';

interface IngredientModel
  extends Model<
    InferAttributes<IngredientModel>,
    InferCreationAttributes<IngredientModel>
  > {
  // Some fields are optional when calling UserModel.create() or UserModel.build()
  id: CreationOptional<number>;
  name: string;
}

const IngredientModel = (sequelize: sequelize) => {
  sequelize.define<IngredientModel>(
    'Ingredients',
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};

export default IngredientModel;
