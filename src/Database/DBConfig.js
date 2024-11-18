import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

const { MYSQLDATABASE, MYSQLUSER, MYSQLPASSWORD, MYSQLHOST, MYSQLPORT } = process.env;

const config = new Sequelize(MYSQLDATABASE,MYSQLUSER,MYSQLPASSWORD,{
    host: MYSQLHOST,
    dialect: 'mysql',
    port: MYSQLPORT
});

export default config;