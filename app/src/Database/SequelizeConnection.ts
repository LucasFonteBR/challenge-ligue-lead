import { Sequelize } from 'sequelize';
import { logger, loggerError } from '../Api/Utils/Logger';

if (!process.env.MYSQL_HOST) {
  loggerError(new Error('MYSQL_HOST is undefined'));
  process.exit(1);
}

if (!process.env.MYSQL_PORT) {
  loggerError(new Error('MYSQL_PORT is undefined'));
  process.exit(1);
}

if (!process.env.MYSQL_DATABASE) {
  loggerError(new Error('MYSQL_DATABASE is undefined'));
  process.exit(1);
}

if (!process.env.MYSQL_USERNAME) {
  loggerError(new Error('MYSQL_USERNAME is undefined'));
  process.exit(1);
}

if (!process.env.MYSQL_PASSWORD) {
  loggerError(new Error('MYSQL_PASSWORD is undefined'));
  process.exit(1);
}

export const SequelizeInstance = new Sequelize({
  dialect: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT || '3306'),
  database: process.env.MYSQL_DATABASE,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  timezone: '+03:00',
  pool: {
    min: 2,
    max: 15,
    idle: 100000,
  },
  logging: false,
});

export const sequelizeTestConnection = async (): Promise<void> => {
  try {
    await SequelizeInstance.authenticate();
    logger.info('✅ Database connected (Sequelize)');
  } catch (e) {
    loggerError(e as Error);
    process.exit(1);
  }
};
