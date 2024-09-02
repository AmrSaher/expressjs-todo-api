import { Router } from "express";
import passport from "passport";
import * as TodosController from "../Controllers/TodosController.mjs";
import { checkSchema } from "express-validator";
import CreateTodoValidationSchema from "../Validation/CreateTodoValidationSchema.mjs";
import TodoIDValidationSchema from "../Validation/TodoIDValidationSchema.mjs";
import UpdateTodoValidationSchema from "../Validation/UpdateTodoValidationSchema.mjs";

const router = Router();

// Middlewares
router.use(passport.authenticate("jwt", { session: false }));

// Endpoints
router.get("/", TodosController.getTodos);
router.get(
    "/:id",
    checkSchema(TodoIDValidationSchema),
    TodosController.getTodo
);
router.post(
    "/",
    checkSchema(CreateTodoValidationSchema),
    TodosController.createTodo
);
router.patch(
    "/:id",
    checkSchema(TodoIDValidationSchema),
    TodosController.toggleComplete
);
router.put(
    "/:id",
    checkSchema(TodoIDValidationSchema),
    checkSchema(UpdateTodoValidationSchema),
    TodosController.updateTodo
);

export default router;
