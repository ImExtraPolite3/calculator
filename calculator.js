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

const populateDisplay = function() {
  const display = document.getElementById('display');
  const allNumbers = document.querySelectorAll('.number');

  allNumbers.forEach(eachNumber => {
    eachNumber.addEventListener('click', () => {
      display.textContent += eachNumber.textContent;
    })
  })
}

const getNumber = function() {
  const allNumbers = document.querySelectorAll('.number');
  const allOperators = document.querySelectorAll('.operator');
  const equal = document.getElementById('equal');
  let convertNum1;
  let convertNum2;
  let something;

  allNumbers.forEach(eachNumber => {
    eachNumber.addEventListener('click', () => {
      if (operator == '') {
        num1 += eachNumber.textContent;
        convertNum1 = Number(num1);
      } else {
        num2 += eachNumber.textContent;
        convertNum2 = Number(num2);
      }
      
      allOperators.forEach(eachOperator => {
        eachOperator.addEventListener('click', () => {
          operator = eachOperator.textContent;
        })
      });
    });
  })
  equal.addEventListener('click', () => {
    console.log(operate(convertNum1, convertNum2, operator));
  })
}

populateDisplay();
getNumber();