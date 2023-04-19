"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.TaskSchema = {
    addTaskPayload: joi_1.default.object({
        title: joi_1.default.string().required().label('Title'),
        description: joi_1.default.string().required().min(10).label('Description'),
        due_date: joi_1.default.string().required().label('Due Date')
    })
};
