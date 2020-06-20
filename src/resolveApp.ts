import * as path from "path";
import * as fs from "fs";

const appDirectory: string = fs.realpathSync(process.cwd());

export default (relativePath: string): string => {
  return path.resolve(appDirectory, relativePath);
};
