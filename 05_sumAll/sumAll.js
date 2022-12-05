function sumOne(n) {
  return ((n + 1) * n) / 2;
}

function isValid(n) {
  if (typeof n != "number") return false;
  return !isNaN(n) && n >= 0;
}

const sumAll = function (num1, num2) {
  if (!isValid(num1) || !isValid(num2)) {
    return "ERROR";
  }
  let larger = Math.max(num1, num2);
  let smaller = Math.min(num1, num2);
  return sumOne(larger) - sumOne(smaller) + smaller;
};

// Do not edit below this line
module.exports = sumAll;
