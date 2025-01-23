import { Sequelize } from "sequelize";

const db_bootcamp = new Sequelize(
    "db_bootcamp",
    "postgres",
    "5150",
    {
        host: "localhost",
        port: "5432",
        dialect: 'postgres'
    }
);

export default db_bootcamp;
