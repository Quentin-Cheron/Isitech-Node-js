import express from "express";
const router = express.Router();

//post
import {
  signInRender,
  signInData,
  signUpRender,
  signUpData,
} from "../controller/user.controller.js";

// Sign up
router.get("/sign-up", signUpRender);
router.post("/sign-up", signUpData);

// Sign in
router.get("/sign-in", signInRender);
router.post("/sign-in", signInData);

export default router;
