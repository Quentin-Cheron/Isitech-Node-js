import db from "../models/index.js";
const user = db.user;
const product = db.products;

import bcryptjs from "bcryptjs";
import ObjectID from "mongoose";
ObjectID.Types.ObjectId;

// Funtion for render the file

export const signUpRender = async (req, res) => {
  const title = "Sign up";
  const breadCrumb = "Home > Sign Up";
  res.render("sign-up", {
    title,
    breadCrumb,
  });
};

// Function for Sign up the user

export const signUpData = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  const existingUser = await user.findOne({
    email: email.toLowerCase(),
  });

  if (existingUser) {
    return res.send({ success: false, message: "User already exist !" });
  }

  const date = new Date();

  const newUser = new user({
    firstname,
    lastname,
    email: email.toLowerCase(),
    password: bcryptjs.hashSync(password, 8),
    cart: [],
    role: "client",
    createdAt: date,
  });

  await newUser
    .save(newUser)
    .then(() => {
      res.redirect("/sign-in");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while verifying the User.",
      });
    });
};

// Function for render the file

export const signInRender = async (req, res) => {
  const title = "Sign in";
  const breadCrumb = "Home > Sign in";
  res.render("sign-in", {
    title,
    breadCrumb,
  });
};

// Function for sign in the user

export const signInData = async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await user.findOne({ email: email.toLowerCase() });

  if (!existingUser) {
    res.render("sign-in", {
      title,
      breadCrumb,
    });
  }

  const passwordIsValid = bcryptjs.compareSync(password, existingUser.password);

  if (!passwordIsValid) {
    res.render("sign-in", {
      title,
      breadCrumb,
    });
  }

  req.session.isLoggedIn = true;
  req.session.user_id = existingUser._id;
  req.session.role = existingUser.role;

  res.redirect("/");
};

// Function for logout

export const logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/sign-in");
    }
  });
};

export const cartData = async (req, res) => {
  const { label, price, description } = req.body;
  const existingUser = await user.findOne({ _id: req.session.user_id });

  if (!existingUser) {
    return res.send({ success: false, message: "User not found" });
  }
  const existingProduct = await product.findOne({
    label,
    price,
    description,
  });

  const array = existingUser.cart;

  if (existingProduct) {
    await user.updateOne({
      cart: [
        ...array,
        {
          label,
          price,
          description,
          id: existingProduct._id,
        },
      ],
    });
  }

  res.redirect("/");
};

export const cartRender = async (req, res) => {
  const existingUser = await user.findOne({ _id: req.session.user_id });
  const title = "Shop Standard";
  const breadCrumb = "Shop Standard";
  const products = existingUser.cart;
  res.render("cart", {
    title,
    breadCrumb,
    products,
  });
};
