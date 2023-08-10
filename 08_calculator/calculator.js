const add = function (n1, n2) {
  return n1 + n2;
};

const subtract = function (n1, n2) {
  return n1 - n2;
};

const sum = function (numbers) {
  return numbers.reduce((sum, n) => sum += n, 0);
};

const multiply = function (numbers) {
  return numbers.reduce((sum, n) => sum *= n, 1);
};

const power = function (n1, n2) {
  return n1 ** n2;
};

const factorial = function (n) {
  const numbers = [];
  for (let i = n; i > 0; i--) {
    numbers.push(i);
  }
  return multiply(numbers);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
