export default {
    name: {
        isLength: {
            options: {
                min: 3,
                max: 10,
            },
            errorMessage: "Must be at least 3-10 characters.",
        },
        notEmpty: {
            errorMessage: "Must be not empty.",
        },
        isString: {
            errorMessage: "Must be a string",
        },
    },
    email: {
        notEmpty: {
            errorMessage: "Must be not Empty.",
        },
        isString: {
            errorMessage: "Must be a string.",
        },
    },
    password: {
        isLength: {
            options: {
                min: 6,
                max: 20,
            },
            errorMessage: "Must be at least 6-20 characters.",
        },
        notEmpty: {
            errorMessage: "Must be not empty.",
        },
        isString: {
            errorMessage: "Must be a string.",
        },
    },
    password_confirmation: {
        notEmpty: {
            errorMessage: "Must be not empty.",
        },
    },
};
