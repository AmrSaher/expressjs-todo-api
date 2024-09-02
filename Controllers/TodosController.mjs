import { matchedData, validationResult } from "express-validator";
import { Todo } from "../Models/Todo.mjs";

export const getTodos = async (req, res) => {
    const todos = await Todo.find({ user: req.user._id });
    res.status(200).send(todos);
};

export const getTodo = async (req, res) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty())
        return res.status(400).send(validationErrors);

    const data = matchedData(req);

    try {
        const todo = await Todo.findById(data.id);
        if (todo.user.toString() != req.user._id.toString())
            throw new Error("This todo is not for this user.");
        res.status(200).send(todo);
    } catch (err) {
        return res.status(404).send({ msg: "Todo not found." });
    }
};

export const createTodo = async (req, res) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty())
        return res.status(400).send(validationErrors);

    const data = matchedData(req);
    const newTodo = new Todo({
        ...data,
        user: req.user._id,
    });

    try {
        const savedTodo = await newTodo.save();
        res.status(200).send(savedTodo);
    } catch (err) {
        res.sendStatus(400);
    }
};

export const toggleComplete = async (req, res) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty())
        return res.status(400).send(validationErrors);

    const data = matchedData(req);
    let todo;

    try {
        todo = await Todo.findById(data.id);
        if (todo.user.toString() != req.user._id.toString())
            throw new Error("This todo is not for this user.");
    } catch (err) {
        return res.status(404).send({ msg: "Todo not found." });
    }

    todo.isCompleted = !todo.isCompleted;

    try {
        const newTodo = await todo.save();
        res.status(200).send(newTodo);
    } catch (err) {
        res.sendStatus(400);
    }
};

export const updateTodo = async (req, res) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty())
        return res.status(400).send(validationErrors);

    const data = matchedData(req);
    let todo;

    try {
        todo = await Todo.findById(data.id);
        if (todo.user.toString() != req.user._id.toString())
            throw new Error("This todo is not for this user.");
    } catch (err) {
        return res.status(404).send({ msg: "Todo not found." });
    }

    todo.task = data.task;
    todo.description = data.description;
    todo.isCompleted = data.isCompleted;

    try {
        const newTodo = await todo.save();
        res.status(200).send(newTodo);
    } catch (err) {
        res.sendStatus(400);
    }
};
