import { TypeOrmModuleOptions } from '@nestjs/typeorm';
require('dotenv').config();

const databaseConfig: TypeOrmModuleOptions = {
    type: "postgres",
    // host: "tai.db.elephantsql.com",
    host: "localhost",
    port: 5432,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD, 
    database: process.env.PG_Databse,
    synchronize: true, 
    logging: false,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
};

export default databaseConfig;
