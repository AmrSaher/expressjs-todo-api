import mongoose from "mongoose";

const DB_NAME = process.env.DB_NAME || "expressjs_todo_app";

mongoose
    .connect(`mongodb://localhost/${DB_NAME}`)
    .then((res) => console.log("Connected successfully!"))
    .catch((err) => console.log(err));
