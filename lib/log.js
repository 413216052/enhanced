"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
function noop(msg) {
    return msg;
}
function log(fn) {
    return (msg) => {
        console.log(fn(msg));
    };
}
exports.default = {
    success: log(chalk_1.default.green),
    error: log(chalk_1.default.red),
    warn: log(chalk_1.default.yellow),
    info: log(chalk_1.default.cyan),
    log: log(noop),
};
