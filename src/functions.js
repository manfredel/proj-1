export const sumTotal = (value) => {
  let sum = 0;
  for (const key in value) {
    sum += +value[key];
  }
  return sum;
};
export const Diff = (a, b) => {
  let final = a - b;
  return final;
};
