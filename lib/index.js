"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const EXPORT_EXCLUDE_FILES = ["index.ts"];
function splitExportExcludeFiles(file) {
    return !EXPORT_EXCLUDE_FILES.includes(file);
}
function splitSuffix(spt) {
    return (str) => str.split(spt)[0];
}
function getExportFilsInfo() {
    return fs.readdirSync("./src")
        .filter(splitExportExcludeFiles)
        .map(splitSuffix(".ts"));
}
function generateExportMappings() {
    return getExportFilsInfo()
        .reduce((preVal, cVal) => (Object.assign({}, preVal, { [cVal]: () => require(`./${cVal}`) })), {});
}
function generateExport(obj, mappings) {
    for (const name of Object.keys(mappings)) {
        Object.defineProperty(obj, name, {
            configurable: false,
            enumerable: true,
            get: mappings[name]
        });
    }
}
;
generateExport(module.exports = {}, generateExportMappings());
