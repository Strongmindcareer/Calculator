const display = document.getElementById('display');

// Handle Keyboard Input
document.addEventListener('keydown', (event) => {
  const key = event.key;

  if (!isNaN(key)) appendNumber(key);
  else if (['+', '-', '*', '/', '%'].includes(key)) appendOperator(key);
  else if (key === 'Enter' || key === '=') calculate();
  else if (key === 'Backspace') backspace();
  else if (key === 'Escape') clearDisplay();
  else if (key === '.') appendNumber('.');
});

// Append Number to Display
function appendNumber(number) {
  if (display.innerText === '0') display.innerText = number;
  else display.innerText += number;
}

// Append Operator
function appendOperator(operator) {
  const lastChar = display.innerText.slice(-1);
  if (['+', '-', '*', '/', '%'].includes(lastChar)) return;
  display.innerText += operator;
}

// Clear the Display
function clearDisplay() {
  display.innerText = '0';
}

// Backspace Functionality
function backspace() {
  if (display.innerText.length === 1) display.innerText = '0';
  else display.innerText = display.innerText.slice(0, -1);
}

// Calculate the Result
function calculate() {
  try {
    display.innerText = eval(display.innerText.replace('÷', '/').replace('×', '*'));
  } catch {
    display.innerText = 'Error';
  }
}
