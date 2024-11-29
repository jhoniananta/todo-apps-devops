import * as dotenv from 'dotenv';
import 'dotenv/config';
import sql from 'mssql';

if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: `.env.${process.env.NODE_ENV}`, debug: true });
}

const server = process.env.AZURE_SQL_SERVER;
const database = process.env.AZURE_SQL_DATABASE;
const port = +process.env.AZURE_SQL_PORT;
const type = process.env.AZURE_SQL_AUTHENTICATIONTYPE;
const user = process.env.AZURE_SQL_USER;
const password = process.env.AZURE_SQL_PASSWORD;

console.log({
  server: process.env.AZURE_SQL_SERVER,
  database: process.env.AZURE_SQL_DATABASE,
  user: process.env.AZURE_SQL_USER,
  password: process.env.AZURE_SQL_PASSWORD,
  port: process.env.AZURE_SQL_PORT,
});

export const noPasswordConfig = {
  server,
  port: parseInt(process.env.AZURE_SQL_PORT, 10),
  database,
  authentication: {
    type,
  },
  options: {
    encrypt: true,
    trustServerCertificate: false,
  },
};


export const passwordConfig = {
  server,
  port: parseInt(process.env.AZURE_SQL_PORT, 10),
  database,
  user,
  password,
  options: {
    encrypt: true,
  },
};