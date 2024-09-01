import { matchedData, validationResult } from "express-validator";
import { comparePassword, hashPassword } from "../Helpers/Bcrypt.mjs";
import { User } from "../Models/User.mjs";
import { generateJWTToken } from "../Helpers/JWT.mjs";

export const register = async (req, res) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty())
        return res.status(400).send(validationErrors);

    const data = matchedData(req);

    if (data.password !== data.password_confirmation)
        return res.status(400).send({
            errors: [
                {
                    type: "field",
                    value: data.password_confirmation,
                    msg: "Password and confirmation do not match.",
                    path: "password_confirmation",
                    location: "body",
                },
            ],
        });

    data.password = hashPassword(data.password);
    const newUser = new User({
        name: data.name,
        email: data.email,
        password: data.password,
    });

    try {
        const savedUser = await newUser.save();
        const token = generateJWTToken(savedUser);
        res.status(201).send({ token });
    } catch (err) {
        res.status(409).send({
            msg: "Name or email already exists. Please choose a different one.",
        });
    }
};

export const login = async (req, res) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty())
        return res.status(400).send(validationErrors);

    const data = matchedData(req);
    const user = await User.findOne({ email: data.email });

    if (!user || !comparePassword(data.password, user.password))
        return res.status(400).send({ msg: "Invalid Credentials." });

    const token = generateJWTToken(user);
    res.status(200).send({ token });
};

export const getUser = async (req, res) => {
    res.status(200).send(req.user);
    // res.send(req.headers.authorization.split(" ")[1]);
};
