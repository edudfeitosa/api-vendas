import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

const dataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [
    "./src/modules/typeorm/migrations/*.ts"
  ]
});

export default dataSource;
