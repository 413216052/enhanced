"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
exports.default = (fn) => function traverse(filePath) {
    if (!fs.existsSync(filePath)) {
        throw new Error(`${filePath} 不存在!`);
    }
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
        fn(filePath, stat);
        fs.readdirSync(filePath).forEach((file) => traverse(`${filePath}/${file}`));
    }
    else {
        fn(filePath, stat);
    }
};
