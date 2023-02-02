import mongoose from "mongoose";

const userIds = [
    new mongoose.Types.ObjectId()
  ];

export const users = [
    {
        _id: userIds[0],
        firstName: "test",
        lastName: "me",
        email: "abcdef@gmail.com",
        password: "password",
        picturePath: "",
        wishlists: [],
        createdAt: 1115211422,
        updatedAt: 1115211422,
        __v: 0,
    }
]

export const wishlists = [
    {
      _id: new mongoose.Types.ObjectId(),
      ownerEmail: "abcdef@gmail.com",
      listName: "My Wishlist",
      password: "test",
      items: [
        "item1",
        "item2",
        "item3",
      ],
    }
]