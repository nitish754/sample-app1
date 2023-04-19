"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const routes_1 = __importDefault(require("./routes/routes"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
const errorHandler_1 = require("./middleware/errorHandler");
const passport_1 = __importDefault(require("passport"));
const passport_2 = __importDefault(require("./middleware/passport"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
app.get("/", (req, res, next) => {
    res.json({
        message: "Welcome to my first Express server"
    });
});
app.use(express_1.default.json());
app.use(passport_1.default.initialize());
(0, passport_2.default)(passport_1.default);
app.use((0, cookie_parser_1.default)());
app.use("/api", routes_1.default);
app.use(() => {
    throw (0, http_errors_1.default)(404, 'Route not found');
});
app.use(errorHandler_1.errorHandler);
// connect to database 
mongoose_1.default.connect(config_1.DB)
    .then(() => {
    console.log("connected to Database");
    app.listen(config_1.PORT, () => {
        console.log(`server running on ${config_1.PORT}`);
    });
})
    .catch(() => {
    throw (0, http_errors_1.default)(501, "Unable to connect to database");
});
