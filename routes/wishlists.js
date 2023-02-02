import express from "express";
import { getUserWishlists } from "../controllers/wishlists.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getUserWishlists);

export default router;