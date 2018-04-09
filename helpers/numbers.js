import { round } from 'lodash';

export function getExponent(number) {
  const exp = String(number);

  return Number(exp.substr(exp.lastIndexOf('e') + 1));
}

export function getRoundedNumber(number) {
  return round(number / (10 ** getExponent(number)), 2);
}
