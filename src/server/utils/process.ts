import cp from "node:child_process";

export const exec = (cmd: string): Promise<string> =>
  new Promise((resolve, reject) => {
    cp.exec(cmd, (err, stdout) => {
      if (err) reject(err);
      else resolve(stdout);
    });
  });
