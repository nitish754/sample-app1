"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.UserSchema = {
    signupPayload: joi_1.default.object({
        name: joi_1.default.string().required().label('Name'),
        email: joi_1.default.string().email().required().label('Email'),
        password: joi_1.default.string().required().label('Password')
    }),
    loginPayload: joi_1.default.object({
        email: joi_1.default.string().email().required().label('Email'),
        password: joi_1.default.string().required().label('Password')
    })
};
