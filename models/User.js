import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        lastName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true
        },
        password: {
            type: String,
            required: true,
            max: 50,
            min: 8,
        },
        picturePath: {
            type: String,
            default: "",
        },
        wishlists: {
            type: Array,
            default: []
        },
        wishlistPassword: {
            type: String,
            required: true,
            max: 50,
            min: 8,
        },
    }, {timestamps: true}
)

const User = mongoose.model("User", UserSchema)
export default User