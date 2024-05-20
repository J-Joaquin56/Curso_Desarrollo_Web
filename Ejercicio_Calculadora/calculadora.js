'use strict';

function addNumber(num) {
  const result = document.getElementById('resultado');
  if (result.innerHTML === '0') {
    result.innerHTML = num;
  } else {
    result.innerHTML += num;
  }
}

function clearResult() {
  const result = document.getElementById('resultado');
  result.innerHTML = 0;
}

function clearSingleDigit() {
  const result = document.getElementById('resultado');
  result.innerHTML = result.innerHTML.slice(0, -1);
  if (result.innerHTML === '') {
    result.innerHTML = 0;
  }
}

function addDecimal() {
  const result = document.getElementById('resultado');
  if (!result.innerHTML.includes('.')) {
    result.innerHTML += '.';
  }
}

function addOperand(operator) {
  const operators = ['+', '-', '×', '÷', '%'];
  const result = document.getElementById('resultado');
  if (result.innerHTML.endsWith('.')) {
    return;
  }
  let endsInOperator = false;
  for (let i = 0; i < operators.length; i++) {
    if (result.innerHTML.endsWith(operators[i])) {
      endsInOperator = true;
      break;
    }
  }
  if (endsInOperator) {
    clearSingleDigit();
  }
  result.innerHTML += operator;
}

function executeResult() {
  const resultElement = document.getElementById('resultado');
  let result = resultElement.innerHTML;

  // Replace multiplication and division symbols
  result = result.replace(/×/g, '*');
  result = result.replace(/÷/g, '/');

  // Handle percentage calculations
  result = result.replace(/(\d+(\.\d+)?)([%])/g, (match, number) => {
    const lastOperatorIndex = result.slice(0, result.indexOf(match)).search(/[\+\-\*\/]/);
    if (lastOperatorIndex === -1) {
      return `(${number}/100)`;
    } else {
      const baseNumberMatch = result.slice(0, lastOperatorIndex).match(/(\d+(\.\d+)?)(?!.*\d)/);
      const baseNumber = baseNumberMatch ? baseNumberMatch[0] : '0';
      return `(${baseNumber} * ${number} / 100)`;
    }
  });

  try {
    const evaluatedResult = eval(result);

    // Round to 4 decimal places if necessary
    const roundedResult = Math.round(evaluatedResult * 10000) / 10000;
    resultElement.innerHTML = roundedResult.toString();
  } catch (e) {
    resultElement.innerHTML = 'Error';
  }
}

(function() {
  const resultado = document.getElementById('resultado');
  console.log(resultado.innerHTML);
  console.log(resultado.value);
})();
