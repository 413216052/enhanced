import * as fs from "fs";
import * as path from "path";

interface NormalObject<V = any> {
    [key: string]: V
}

type ExportMappings = NormalObject<() => any>

const EXPORT_EXCLUDE_FILES: Array<string> = ["index.ts"];

function splitExportExcludeFiles(file: string): boolean {
    return !EXPORT_EXCLUDE_FILES.includes(file)
}

function splitSuffix(spt: string): (str: string) => string {
    return (str: string): string =>
        str.split(spt)[0]
}

function getExportFilsInfo(): Array<string> {
    return fs.readdirSync(path.join(__dirname, "../src"))
        .filter(splitExportExcludeFiles)
        .map(splitSuffix(".ts"))
}

function generateExportMappings(): ExportMappings {
    return getExportFilsInfo()
        .reduce((preVal, cVal) =>
            ({
                ...preVal,
                [cVal]: () => require(`./${cVal}`).default
            })
            , {});
}

function generateExport(obj: NormalObject, mappings: ExportMappings): void {
    for (const name of Object.keys(mappings)) {
        Object.defineProperty(obj, name, {
            configurable: false,
            enumerable: true,
            get: mappings[name]
        });
    }
};

generateExport(module.exports = {}, generateExportMappings())