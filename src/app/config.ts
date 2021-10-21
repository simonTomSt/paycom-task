import * as dotenv from 'dotenv';

dotenv.config();

const config = {
  PORT: Number(process.env.PORT!),
  DATABASE_URL: process.env.DATABASE_URL!,
};

export default config;
