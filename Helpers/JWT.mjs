import jwt from "jsonwebtoken";

export const generateJWTToken = (user) => {
    const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
    };

    const token = jwt.sign(payload, process.env.SECRET || "secret", {
        expiresIn: "1h",
    });

    return token;
};
