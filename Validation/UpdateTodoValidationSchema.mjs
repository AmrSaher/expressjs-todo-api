export default {
    task: {
        isString: {
            errorMessage: "Must be a string.",
        },
        notEmpty: {
            errorMessage: "Must be not empty.",
        },
    },
    description: {
        isString: {
            errorMessage: "Must be a string.",
        },
    },
    isCompleted: {
        isBoolean: {
            errorMessage: "Must be a boolean.",
        },
        notEmpty: {
            errorMessage: "Must be not empty.",
        },
    },
};
