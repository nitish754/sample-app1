"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTaskValidation = void 0;
const validator_1 = __importDefault(require("../utils/validator"));
const TaskSchema_1 = require("./TaskSchema");
const AddTaskValidation = (req, res, next) => {
    (0, validator_1.default)(TaskSchema_1.TaskSchema.addTaskPayload, req.body, next);
};
exports.AddTaskValidation = AddTaskValidation;
