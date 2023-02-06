import DBConfig from './db';

export default () => ({
  environment: process.env.NODE_ENV ? process.env.NODE_ENV : 'dev',
  port: process.env.PORT,
  database: DBConfig(),
});
