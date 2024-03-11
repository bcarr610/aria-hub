export const bytes = (input: number) => {
  const kb = input / 1000;
  const mb = kb / 1000;
  const gb = mb / 1000;

  const toKB = (precision: number = 2, returnString: boolean = true) => {
    const res = kb.toFixed(precision);
    if (returnString) return res;
    return parseInt(res);
  };
  const toMB = (precision: number = 2, returnString: boolean = true) => {
    const res = mb.toFixed(precision);
    if (returnString) return res;
    return parseInt(res);
  };
  const toGB = (precision: number = 2, returnString: boolean = true) => {
    const res = gb.toFixed(precision);
    if (returnString) return res;
    return parseInt(res);
  };
  const auto = (precision: number = 2, returnString: boolean = true) => {
    if (kb < 1000) return toKB(precision, returnString);
    else if (mb < 1000) return toMB(precision, returnString);
    return toGB(precision, returnString);
  };
};
