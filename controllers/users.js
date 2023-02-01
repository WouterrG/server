import User from "../models/User";
import Wishlist from "../models/Wishlist";

/* READ */
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByID(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserFriend = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByID(id);

    const wishlists = await Promise.all(
      user.wishlists.map((id) => Wishlist.findById(id))
    );

    const formattedWishlists = wishlists.map(({ _id, listName }) => {
      return { _id, listName };
    });

    res.status(200).json(formattedWishlists);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const addRemoveWishlist = async (req, res) => {
  try {
    const { id, wishlistId } = req.params;
    const user = await User.findById(id);
    const wishlist = await User.findById(wishlistId);

    if (user.wishlists.includes(wishlistId)) {
      user.wishlists = user.wishlists.filter((id) => id !== friendId);
      wishlist.ownerEmail = "";
    } else {
      user.wishlists.push(wishlistId);
      wishlist.ownerEmail = user.email;
    }
    await user.save();
    await wishlist.save();
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
