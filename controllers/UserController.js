"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = exports.SignUp = void 0;
const User_1 = __importDefault(require("../model/User"));
const http_errors_1 = __importDefault(require("http-errors"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
const SignUp = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { name, email, password, confirm_password } = req.body;
        const user = yield User_1.default.findOne({ email: email });
        if (user)
            return next((0, http_errors_1.default)(422, 'Email alreday registered with us'));
        const hashedPwd = yield bcrypt_1.default.hash(password, 8);
        const createUser = yield User_1.default.create({ name, email, password: hashedPwd });
        res.status(200).json({
            status: 'success',
            message: 'User created successfully',
            data: createUser
        });
    }
    catch (error) {
        return next(http_errors_1.default.InternalServerError);
    }
});
exports.SignUp = SignUp;
const Login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let { email, password } = req.body;
    try {
        /**
         * check if user is not registered
         */
        const user = yield User_1.default.findOne({ email: email });
        if (!user)
            return next((0, http_errors_1.default)(400, "Email is not registered with us !"));
        /**
         * uncomment when you want to verify user
         */
        // if(!user.isUserVerified) return next(createHttpError(400,"User not verified"))
        const isValidPassword = yield bcrypt_1.default.compare(password, user.password);
        if (!isValidPassword)
            return next((0, http_errors_1.default)(400, "Enter a valid password"));
        const token = jsonwebtoken_1.default.sign({ user }, 
        // {
        //     name : user.name,
        //     email : user.email,
        //     id : user._id
        // },
        config_1.JWT_KEY, {
            expiresIn: "7d"
        });
        res.cookie("jwt", token);
        res.json({
            status: "success",
            message: "Logged in successfully",
            token: token,
            data: user
        });
    }
    catch (error) {
        return next(http_errors_1.default.InternalServerError);
    }
});
exports.Login = Login;
