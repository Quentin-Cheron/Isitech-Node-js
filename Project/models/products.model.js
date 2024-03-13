import mongoose from "mongoose";

const Products = mongoose.model(
  "products",
  new mongoose.Schema({
    label: String,
    price: String,
    description: String,
    img: String,
    createdAt: Date,
  })
);

export default Products;
