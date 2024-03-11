import { exec } from "./utils/process";

class System {
  constructor() {}

  async getMem() {
    try {
      const cmd = "free -tb | awk 'NR == 2 {print $2, $7}'";
      const result = (await exec(cmd))?.trim()?.split(" ");
      if (result.length == 2) {
        const total = parseInt(result[0]);
        const available = parseInt(result[1]);

        if (isNaN(total) || isNaN(available)) {
          throw new Error(`Invalid MEM result: ${result}`);
        }

        return {
          total: result[0],
          available: result[1],
        };
      } else {
        throw new Error(`Invalid memory format received: ${result}`);
      }
    } catch (err) {
      console.error(err);
    }
  }
}

export default System;
