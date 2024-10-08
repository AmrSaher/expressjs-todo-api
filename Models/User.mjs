import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true,
    },
    email: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true,
    },
    password: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    todos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Todo" }],
});

export const User = mongoose.model("User", UserSchema);
