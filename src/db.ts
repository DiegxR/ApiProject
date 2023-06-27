import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(`postgres://postgres:123456789@localhost/postgres`, {
    logging: false,
    native: false
});

export default sequelize;