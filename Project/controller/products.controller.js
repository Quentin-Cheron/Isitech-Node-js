import db from "../models/index.js";
const products = db.products;

// Get all Products

export const showProducts = async (req, res) => {
  const allProducts = await products.find({});

  const title = "Shop Standard";
  const breadCrumb = "Shop Standard";
  res.render("index", {
    products: allProducts,
    title,
    breadCrumb,
  });
};
