import mongoose from "mongoose";

const User = mongoose.model(
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

export default User;
