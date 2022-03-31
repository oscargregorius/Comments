import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

export const Post = db.define(
  "post",
  {
    author: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true }
);

export const Comment = db.define(
  "comment",
  {
    author: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true }
);

Post.hasMany(Comment);
Comment.belongsTo(Post);
