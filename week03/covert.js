function convertStringToNumber(string, scale) {
  if (!scale) {
    scale = 10;
  }
  let chars = string.split("");
  let number = 0;

  // 整数
  let i = 0;
  while (i < chars.length && chars[i] !== ".") {
    number = number * scale;
    number += chars[i].codePointAt(0) - "0".codePointAt(0);
    i++;
  }
  if (chars[i] === ".") {
    i++;
  }

  // 小数
  let fraction = 1;
  while (i < chars.length) {
    fraction = fraction / scale;
    number += (chars[i].codePointAt(0) - "0".codePointAt(0)) * fraction;
    i++;
  }
  return number;
}

function convertNumberToString(number, scale) {
  if (!scale) {
    scale = 10;
  }

  const FRACTION_INDEX = 1;
  let fractionLength = 0;

  let splitArray = (number + "").split(".");
  if (splitArray[FRACTION_INDEX]) {
    fractionLength = splitArray[FRACTION_INDEX].length;
  }
  
  let integer = Math.floor(number);
  let fraction = (number - integer).toFixed(fractionLength);
  let string = "";

  while (integer > 0) {
    string = integer % scale + string;
    integer = Math.floor(integer / scale);
  }
  if (fraction > 0) {
    string += ".";
  }
  let i = 0;
  let int = 0;
  while (i < fractionLength) {
    fraction = fraction * scale;
    int = i === fractionLength - 1 ? Math.round(fraction) : Math.floor(fraction);
    string += int;
    fraction -= int;
    i++;
  }
  return string;
}