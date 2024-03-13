import db from "../models/index.js";
const user = db.user;

import bcryptjs from "bcryptjs";

export const signUpRender = async (req, res) => {
  const title = "Sign up";
  const breadCrumb = "Home > Sign Up";
  res.render("sign-up", {
    title,
    breadCrumb,
  });
};

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
    createdAt: date,
  });

  const title = "Sign in";
  const breadCrumb = "Home > Sign in";

  await newUser
    .save(newUser)
    .then(() => {
      res.render("sign-in", {
        title,
        breadCrumb,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while verifying the User.",
      });
    });
};

export const signInRender = async (req, res) => {
  const title = "Sign in";
  const breadCrumb = "Home > Sign in";
  res.render("sign-in", {
    title,
    breadCrumb,
  });
};

export const signInData = async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await user.findOne({ email: email.toLowerCase() });

  if (!existingUser) {
    return res.send({ success: false, message: "User not found" });
  }

  const passwordIsValid = bcryptjs.compareSync(password, existingUser.password);

  if (!passwordIsValid) {
    return res.send({ success: false, message: "User not found" });
  }

  res.send({ success: true, message: "User signed in successfully" });

  const title = "Sign up";
  const breadCrumb = "Home > Sign Up";
  res.render("sign-in", {
    title,
    breadCrumb,
  });
};
