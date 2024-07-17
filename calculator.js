let num1 = '';
let num2 = '';
let operator = '';

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

function getFirstNumber() {
  const all_numbers = document.querySelectorAll('.number');

  all_numbers.forEach(number => {
    number.addEventListener('click', () => {
      if (operator === '') {
        num1 += number.textContent;
        console.log(num1);
      }

      getOperator();
    })
  })
}

function getOperator() {
  const all_operator = document.querySelectorAll('.operator');

  all_operator.forEach(each_operator => {
    each_operator.addEventListener('click', () => {
      operator = each_operator.textContent;
      console.log(operator);
    })
  })
}

function getSecondNumber() {
  const all_numbers = document.querySelectorAll('.number');

  all_numbers.forEach(number => {
    number.addEventListener('click', () => {
      if (operator !== '') {
        num2 += number.textContent;
        console.log(num2);
      }
    })
  })
}

function testOperate() {
  const equal = document.getElementById('equal');

  equal.addEventListener('click', () => {
    console.log(operate(Number(num1), Number(num2), operator))
  })
}

getFirstNumber();
getSecondNumber();
testOperate();