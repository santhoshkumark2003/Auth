import express from "express";
import { getUserProfile, login, register } from "../Controllers/authController.js";
import protect from "../Middlewares/Middleware.js";

const router = express.Router();

router.post("/register",register);
router.post("/login",login);
router.get("/profile",protect,getUserProfile);

export default router;