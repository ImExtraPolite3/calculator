let num1;
let num2;
let operator;

const addition = function(num1, num2) {
  return num1 + num2;
}

const subtraction = function(num1, num2) {
  return num1 - num2;
}

const multiplication = function(num1, num2) {
  return num1 * num2;
}

const division = function(num1, num2) {
  return num1 / num2;
}

const operate = function(num1, num2, operator) {
  if (operator === '+') {
    return addition(num1, num2);
  } else if (operator === '-') {
    return subtraction(num1, num2);
  } else if (operator === '*') {
    return multiplication(num1, num2);
  } else {
    return division(num1, num2);
  }
}

