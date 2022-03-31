import express from "express";
import cors from "cors";
import db from "./config/database.js";
import Router from "./routes/routes.js";

const app = express();

app.use(express.json());
app.use(cors());

try {
  await db.authenticate();
  console.log("connected successfully");
} catch (error) {
  console.log("unable to connect to database.");
}

app.use(Router);
app.listen(4000, () => console.log("Server running at port: 4000"));
