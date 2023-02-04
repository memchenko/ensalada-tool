import DBConfig from './db';

export default () => ({
  environment: process.env.NODE_ENV ? process.env.NODE_ENV : 'dev',
  port: 3000,
  database: DBConfig(),
});
