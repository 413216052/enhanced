import * as fs from "fs";

export default (fn: Function) =>
  function traverse(filePath: string): void {
    if (!fs.existsSync(filePath)) {
      throw new Error(`${filePath} 不存在!`);
    }
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      fn(filePath, stat);
      fs.readdirSync(filePath).forEach((file) =>
        traverse(`${filePath}/${file}`)
      );
    } else {
      fn(filePath, stat);
    }
  };
