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
  const operators = ['+', '-', 'ž', 'ö'];
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
  result = result.replace(/ž/g, '*');
  result = result.replace(/ö/g, '/');
  resultElement.innerHTML = eval(result).toString();
}

(function() {
  const resultado = document.getElementById('resultado');
  console.log(resultado.innerHTML);
  console.log(resultado.value);
})();


// TAREA o EJERCICIO
// Implementar el boton de %

// TAREA o EJERCICIO
// Implementar un redondeo:
// Ejemplo: 2/3 = 0.6667