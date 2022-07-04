export const SumTotal = (value) => {
  let sum = 0;
  for (let i = 0; i < value.length; i++) {
    sum += value[i];
  }
  return sum;
};
export const Diff = (a, b) => {
  let final = a - b;
  return final;
};
