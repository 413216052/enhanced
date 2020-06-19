"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs = require("fs");
const appDirectory = fs.realpathSync(process.cwd());
exports.default = (relativePath) => {
    return path.resolve(appDirectory, relativePath);
};
