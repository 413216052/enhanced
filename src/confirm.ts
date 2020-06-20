import * as readline from "readline";

export default (msg: string): Promise<string> => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((res) => {
    rl.question(msg, (answer) => {
      rl.close();
      res(answer);
    });
  });
};
