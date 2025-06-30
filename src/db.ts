import { Sequelize } from 'sequelize';

export const sequelize: Sequelize = new Sequelize(
  'sqlite::memory:',
  'test',
  undefined,
  {
    dialect: 'sqlite',
    storage: 'sequelize.sqlite',
    logging: false,
  }
);
