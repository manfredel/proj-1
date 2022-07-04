import logo from "./Monies.png";
import yes from "./yes.png";
import no from "./no.png";

export const sumTotal = (value) => {
  let sum = 0;
  for (const key in value) {
    sum += +value[key];
  }
  return sum;
};
export const diff = (a, b) => {
  let final = a - b;
  return final;
};

export const LogoPic = () => {
  return <img src={logo} alt="Logo" width="300px" />;
};

export const YesPic = () => {
  return <img src={yes} alt="pass" />;
};

export const NoPic = () => {
  return <img src={no} alt="fail" />;
};
