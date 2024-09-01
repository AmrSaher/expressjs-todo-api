import { Router } from "express";
import AuthRoutes from "./AuthRoutes.mjs";
import TodosRoutes from "./TodosRoutes.mjs";

const router = Router();

router.use("/api/auth", AuthRoutes);
router.use("/api/todos", TodosRoutes);

export default router;
