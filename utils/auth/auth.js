"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../../config");
const auth = (req, res) => {
    const token = req.headers.authorization;
    const decodeToken = jsonwebtoken_1.default.verify(token, config_1.JWT_KEY);
    return decodeToken;
};
exports.auth = auth;
