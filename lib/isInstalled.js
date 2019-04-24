"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (packageName) => {
    try {
        require.resolve(packageName);
        return true;
    }
    catch (err) {
        return false;
    }
};
