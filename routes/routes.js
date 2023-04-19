"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const exampleController_1 = require("../controllers/exampleController");
const TaskValidation_1 = require("../validations/TaskValidation/TaskValidation");
const UserController_1 = require("../controllers/UserController");
const UserValidation_1 = require("../validations/user/UserValidation");
const authChecker_1 = require("../middleware/authChecker");
const router = (0, express_1.Router)();
/**
 * testing routes
 */
router.get("/", authChecker_1.authChecker, exampleController_1.getExample);
router.get("/example", authChecker_1.authChecker, exampleController_1.getExample2);
/**
 * routes accessible without authentication
 */
router.post('/auth/signup', UserValidation_1.SignupValidation, UserController_1.SignUp);
router.post('/auth/login', UserValidation_1.LoginValidation, UserController_1.Login);
/**
 * routes accessible with authenticationn
 */
router.post('/add-task', authChecker_1.authChecker, TaskValidation_1.AddTaskValidation, exampleController_1.addTask);
exports.default = router;
