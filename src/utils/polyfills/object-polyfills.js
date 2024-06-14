const flattenObj = (obj) => {
  let op = {};

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object" && !Array.isArray(value)) {
      const innerObj = flattenObj(value);
      for (const [innerKey, innerValue] of Object.entries(innerObj)) {
        op[key + "-" + innerKey] = innerValue;
      }
    } else {
      op[key] = value;
    }
  }
  return op;
};

const myStructuredClone = (obj) => {
  const op = {};

  for ([key, value] of Object.entries(obj)) {
    if (typeof value === "object") {
      op[key] = { ...myStructuredClone(value) };
    } else {
      op[key] = value;
    }
  }
  return op;
};
