import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    task: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    description: {
        type: mongoose.Schema.Types.String,
    },
    isCompleted: {
        type: mongoose.Schema.Types.Boolean,
        default: false,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});

export const Todo = mongoose.model("Todo", TodoSchema);
