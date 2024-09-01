import express from "express";
import Routes from "./Routes/index.mjs";
import passport from "passport";
import cookieParser from "cookie-parser";
import session from "express-session";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";

export const CreateApp = () => {
    const app = express();

    app.use(express.json());
    app.use(cookieParser(process.env.SECRET || "secret"));
    app.use(
        session({
            secret: "hello amr saher",
            saveUninitialized: false,
            resave: false,
            cookie: {
                maxAge: 1000 * 60 * 60, // 1 hour
            },
            store: MongoStore.create({
                client: mongoose.connection.getClient(),
            }),
        })
    );
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(Routes);

    return app;
};
