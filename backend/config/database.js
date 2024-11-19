import { Sequelize } from "sequelize";

const db = new Sequelize('todo_list_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;