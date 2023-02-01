import express from "express";
import {
  getUser,
  getUserWishlists,
  addRemoveWishlist,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:id", verifyToken, getUser);
router.get(":/id/friends", verifyToken, getUserWishlists);

/* UPDATE */
router.patch("/:id/:wishlistId", verifyToken, addRemoveWishlist);

export default router;
