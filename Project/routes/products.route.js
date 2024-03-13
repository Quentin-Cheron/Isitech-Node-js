import express from "express";
const router = express.Router();

//post
import { showProducts } from "../controller/products.controller.js";

router.get("/", showProducts);

export default router;
