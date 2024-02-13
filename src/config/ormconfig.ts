import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = new DataSource({
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
  migrations: [],
});

connectDB
  .initialize()
  .then(() => console.log("Conexão com o banco de dados estabelecida"))
  .catch((err) => console.error(err));

export default connectDB;
