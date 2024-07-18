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

function getFirstNumber(callback) {
  const all_numbers = document.querySelectorAll('.number');

  all_numbers.forEach(number => {
    number.addEventListener('click', () => {
      if (operator === '') {
        num1 += number.textContent;
      }
      callback(clearFirstNumber);
    })
  })
}

function getOperator(callback) {
  const all_operator = document.querySelectorAll('.operator');

  all_operator.forEach(each_operator => {
    each_operator.addEventListener('click', () => {
      operator = each_operator.textContent;
      callback(); 
    })
  })
}

function getSecondNumber() {
  const all_numbers = document.querySelectorAll('.number');

  all_numbers.forEach(number => {
    number.addEventListener('click', () => {
      if (operator !== '') {
        num2 += number.textContent;
      }
    })
  })
}

function displayNumbers() {
  const display = document.getElementById('display');
  const all_numbers = document.querySelectorAll('.number');

  all_numbers.forEach(number => {
    number.addEventListener('click', () => {
      display.textContent += number.textContent;
    })
  })
}

function clearFirstNumber() {
  const display = document.getElementById('display');

  if (num2 === '') {
    display.textContent = '';
  }
}

function displayAnswer() {
  const display = document.getElementById('display');
  const equal = document.getElementById('equal');
  const all_operator = document.querySelectorAll('.operator');

  equal.addEventListener('click', () => {
    display.textContent = operate(Number(num1), Number(num2), operator);
  })

  all_operator.forEach(each_operator => {
    each_operator.addEventListener('click', () => {
      if (num2 !== '') {
        num1 = operate(Number(num1), Number(num2), operator);
        num2 = '';
        display.textContent = num1;
      } 
    })
  })
}

function boldOperator() {
  const all_operator = document.querySelectorAll('.operator');
  const all_numbers = document.querySelectorAll('.number');

  all_numbers.forEach(each_number => {
    each_number.addEventListener('click', () => {
      all_operator.forEach(each_operator => {
        each_operator.classList.remove('bold-operator');
      })
    })
  })

  all_operator.forEach(each_operator => {
    each_operator.addEventListener('click', () => {
      manyOperators();
      each_operator.classList.add('bold-operator');
    })
  })
}

function manyOperators() {
  const all_operator = document.querySelectorAll('.operator');

  all_operator.forEach(each_operator => {
    each_operator.classList.remove('bold-operator');
  })
}

function clear() {
  const display = document.getElementById('display');
  const clear = document.getElementById('clear')

  clear.addEventListener('click', () => {
    num1 = '';
    num2 = '';
    operator = ''
    display.textContent = '';
  })
}

getFirstNumber(getOperator);
getSecondNumber();
displayNumbers();
displayAnswer();
boldOperator();
clear();