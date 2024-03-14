import db from "../models/index.js";
const user = db.user;
const product = db.products;

export const updateProductsRender = async (req, res) => {
  const existingProducts = await product.find({});
  const title = "Products list";
  const breadCrumb = "Home > Admin";
  res.render("admin/products", {
    title,
    breadCrumb,
    products: existingProducts,
  });
};

export const updateProductsData = async (req, res) => {
  const { label, price, description, id } = req.body;
  const existingProducts = await product.findOne({ id });

  if (
    label !== existingProducts.label ||
    price !== existingProducts.price ||
    description !== existingProducts.description
  ) {
    await product.updateOne({
      label,
      price,
      description,
    });
  }
  res.redirect("/admin");
};
