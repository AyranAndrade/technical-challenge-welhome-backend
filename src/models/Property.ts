import { DataTypes, Model, type CreationOptional, type InferAttributes, type InferCreationAttributes } from 'sequelize';
import { sequelize } from '../repositories/Database.ts';
import { PropertyStatus } from './PropertyStatus.ts';

export class Property extends Model<InferAttributes<Property>, InferCreationAttributes<Property>> {
  declare id: CreationOptional<number>;
  declare title: string;
  declare address: string;
  declare status: PropertyStatus;
}

Property.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM(...Object.values(PropertyStatus) as string[]),
      allowNull: false
    }
  },
  {
    tableName: 'properties',
    sequelize
  }
);
