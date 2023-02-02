import User from "../models/User.js";
import Wishlist from "../models/Wishlist.js";

/* CREATE */
export const createWishlist = async (req, res) => {
    try {
        const { userId, listName, password, picturePath} = req.body;
        const user = await User.findById(userId);
        const newWishlist = new Wishlist({
            listName,
            ownerEmail: user.email,
            password,
            items: []

        })
        await newWishlist.save();
        const wishlist = await Wishlist.find()

        res.status(201).json(wishlist);
    } catch (err) {
        res.status(409).json({ message: err.message})
    }
}

/* READ */
export const getUserWishlists = async (req, res) => {
    try {
        const { userId } = req.params;
        const wishlist = await Wishlist.find({ userId })

        res.status(200).json(wishlist);

    } catch (err) {
        res.status(404).json({ message: err.message})
    }
}