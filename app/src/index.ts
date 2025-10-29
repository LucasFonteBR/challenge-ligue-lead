import 'reflect-metadata';
import 'dotenv/config';
import { App } from './App';
import { ConnectServer } from './ConnectServer';
import { sequelizeTestConnection } from './Database/SequelizeConnection';

const start = async () => {
  await sequelizeTestConnection();

  const connectServer = new ConnectServer(new App());

  connectServer.startServer();
};

start().then(() => {
  console.log('[DEBUG] Application initialized.');
});
