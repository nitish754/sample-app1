"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginValidation = exports.SignupValidation = void 0;
const validator_1 = __importDefault(require("../utils/validator"));
const UserSchema_1 = require("./UserSchema");
const SignupValidation = (req, res, next) => {
    (0, validator_1.default)(UserSchema_1.UserSchema.signupPayload, req.body, next);
};
exports.SignupValidation = SignupValidation;
const LoginValidation = (req, res, next) => {
    (0, validator_1.default)(UserSchema_1.UserSchema.loginPayload, req.body, next);
};
exports.LoginValidation = LoginValidation;
