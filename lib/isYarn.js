"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
exports.default = () => fs.existsSync(path.resolve(process.cwd(), "yarn.lock"));
