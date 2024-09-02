export default {
    id: {
        in: ["params"],
        isString: {
            errorMessage: "The ID must be string.",
        },
        notEmpty: {
            errorMessage: "The ID must be not empty.",
        },
    },
};
