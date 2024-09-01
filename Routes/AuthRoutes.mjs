import { Router } from "express";
import { checkSchema } from "express-validator";
import * as AuthController from "../Controllers/AuthController.mjs";
import RegisterValidationSchema from "../Validation/RegisterValidationSchema.mjs";
import LoginValidationSchema from "../Validation/LoginValidationSchema.mjs";
import passport from "passport";
import GuestMiddleware from "../Middlewares/GuestMiddleware.mjs";

const router = Router();

// Endpoints
router.post(
    "/register",
    GuestMiddleware,
    checkSchema(RegisterValidationSchema),
    AuthController.register
);
router.post(
    "/",
    GuestMiddleware,
    checkSchema(LoginValidationSchema),
    AuthController.login
);
router.get(
    "/user",
    passport.authenticate("jwt", { session: false }),
    AuthController.getUser
);

export default router;
