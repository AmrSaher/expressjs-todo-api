import { Router } from "express";
import passport from "passport";

const router = Router();

// Middlewares
router.use(passport.authenticate("jwt", { session: false }));

// Endpoints

export default router;
