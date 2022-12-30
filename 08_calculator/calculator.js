const add = function (n1, n2) {
  return n1 + n2;
};

const subtract = function (n1, n2) {
  return n1 - n2;
};

const sum = function (numbers) {
  // if (numbers.length === 0) { return 0; }
  return numbers.reduce((previous, current) => {
    return add(previous, current);
  }, 0);
};

const multiply = function (numbers) {
  return numbers.reduce((previous, current) => {
    return previous * current;
  }, 1);
};

const power = function (base, exp) {
  return base ** exp;
};

const factorial = function (n) {
  result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
