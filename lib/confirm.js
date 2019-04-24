"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
exports.default = (msg) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise(res => {
        rl.question(msg, answer => {
            rl.close();
            res(answer);
        });
    });
};
