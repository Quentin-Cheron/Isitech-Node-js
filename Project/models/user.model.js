import mongoose from "mongoose";

const User = mongoose.model(
  "users",
  new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    cart: [
      {
        label: String,
        price: String,
        description: String,
        number: Number,
      },
    ],
    role: String,
    createdAt: Date,
  })
);

export default User;
