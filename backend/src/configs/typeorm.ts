import * as dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

import DBConfig from './db';

dotenv.config();

export default new DataSource(DBConfig() as DataSourceOptions);
// export default DBConfig();
