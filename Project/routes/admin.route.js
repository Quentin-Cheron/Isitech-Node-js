import express from "express";
const router = express.Router();

// Check if the useris connected and he is an admin

const checkUserConnection = (req, res, next) => {
  if (req.session.isLoggedIn && req.session.role === "admin") {
    next();
  } else {
    res.redirect("/sign-in");
  }
};

//post
import {
  updateProductsRender,
  updateProductsData,
} from "../controller/admin.controller.js";

router.get("/admin", checkUserConnection, updateProductsRender);
router.post("/admin", checkUserConnection, updateProductsData);

export default router;
