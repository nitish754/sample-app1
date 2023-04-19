"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FRONTEND_URL = exports.JWT_KEY = exports.PORT = exports.DB = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.DB = process.env.DB;
exports.PORT = process.env.PORT || 3000;
exports.JWT_KEY = process.env.JWT_KEY;
exports.FRONTEND_URL = process.env.FRONTEND_URL;
