import { execSync } from "child_process";

export default (length: number = 8): string => {
  let result = "";
  try {
    result = execSync("git rev-parse  HEAD").toString().slice(0, length);
  } catch (e) {
    result = "";
  }
  return result;
};
