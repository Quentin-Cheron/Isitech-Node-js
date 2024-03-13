import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

app.use(express.json());
app.use(bodyParser());

// database connection
import "./config/database.js";

// Configure

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "views");

const PORT = process.env.PORT || 7000;

import userRoute from "./routes/user.route.js";
app.use("/", userRoute);

import productRoute from "./routes/products.route.js";
app.use("/", productRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
