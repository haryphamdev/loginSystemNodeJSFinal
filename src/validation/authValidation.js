import { check } from "express-validator";

let validateRegister = [
    check("email", "Invalid email").isEmail().trim(),

    check("password", "Invalid password. Password must be at least 2 chars long")
    .isLength({ min: 2 }),

    check("passwordConfirmation", "Password confirmation does not match password")
    .custom((value, { req }) => {
        return value === req.body.password
    })
];

let validateLogin = [
    check("email", "Invalid email").isEmail().trim(),

    check("password", "Invalid password")
    .not().isEmpty()
];

module.exports = {
    validateRegister: validateRegister,
    validateLogin: validateLogin
};
