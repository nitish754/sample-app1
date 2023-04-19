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
exports.addTask = exports.getExample2 = exports.getExample = void 0;
const Task_1 = __importDefault(require("../model/Task"));
const http_errors_1 = __importDefault(require("http-errors"));
const getExample = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // auth?.user
    res.json({
        message: "welcome first app api"
    });
});
exports.getExample = getExample;
const getExample2 = (req, res, next) => {
    res.status(200).json({
        message: "Your second route is working"
    });
};
exports.getExample2 = getExample2;
const addTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { title, description, due_date } = req.body;
        const createTask = yield Task_1.default.create({
            title: title,
            description: description,
            due_date: due_date
        });
        res.json({
            message: "Task Added Successfully",
            data: createTask
        });
    }
    catch (error) {
        return next(http_errors_1.default.InternalServerError);
    }
});
exports.addTask = addTask;
