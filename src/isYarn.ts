import * as fs from "fs";
import * as path from "path";

export default (): boolean =>
  fs.existsSync(path.resolve(process.cwd(), "yarn.lock"));
