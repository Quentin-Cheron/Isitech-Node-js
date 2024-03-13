import express from "express";
const router = express.Router();

//post
import { showProducts, cart } from "../controller/products.controller.js";

router.get("/", showProducts);
router.get("/cart", cart);

export default router;
