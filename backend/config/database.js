import { Sequelize } from "sequelize";

const db = new Sequelize({
  host: "localhost",
  dialect: "sqlite",
  storage: "comments.db",
});

export default db;
