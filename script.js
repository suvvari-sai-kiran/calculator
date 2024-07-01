let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
  currentInput += number;
  display.textContent = currentInput;
}

function appendOperator(operator) {
  currentInput += operator;
  display.textContent = currentInput;
}

function calculate() {
  try {
    let result = eval(currentInput);
    display.textContent = result;
    currentInput = result.toString();
  } catch (error) {
    display.textContent = 'Error';
  }
}

function clearDisplay() {
  currentInput = '';
  display.textContent = '';
}
