import mongoose from "mongoose";
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

//authentification

db.user = mongoose.model(
  "users",
  new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    cart: Array,
    role: String,
    createdAt: Date,
  })
);

db.products = mongoose.model(
  "products",
  new mongoose.Schema({
    label: String,
    price: String,
    description: String,
  })
);

export default db;
