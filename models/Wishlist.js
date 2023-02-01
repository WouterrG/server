import mongoose from "mongoose";

const WishlistSchema = new mongoose.Schema(
  {
    listName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    ownerEmail: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      max: 50,
      min: 8,
    },
    items: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Wishlist = mongoose.model("Wishlist", WishlistSchema);
export default Wishlist;
