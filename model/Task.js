"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TaskSchema = new mongoose_1.Schema({
    title: {
        type: String,
        default: null
    },
    description: {
        type: String,
        default: null,
    },
    due_date: {
        type: Date,
        default: null
    }
}, {
    timestamps: true,
    versionKey: false
});
exports.default = (0, mongoose_1.model)("Task", TaskSchema);
