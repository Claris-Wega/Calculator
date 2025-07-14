// Step 1: Basic math functions
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        return 'Error';
    }
    return a / b;
}

// Step 2: Variables for the operation
let firstNumber = null;
let operator = null;
let secondNumber = null;

// Step 3: Operate function
function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return null;
    }
}

// Step 5: Populate display when digit buttons are clicked
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');
let displayValue = '';
let waitingForSecondNumber = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (!isNaN(value) || value === '.') {
            displayValue += value;
            display.value = displayValue;
        } else if (value === 'C') {
            displayValue = '';
            firstNumber = null;
            operator = null;
            secondNumber = null;
            waitingForSecondNumber = false;
            display.value = '';
        } else if (['+', '-', '*', '/'].includes(value)) {
            //operator pressed
            if (firstNumber === null) {
                firstNumber = parseFloat(displayValue);
        } else if (operator && displayValue !== ''){
            // If chaining operations, calculate previous result first
            secondNumber = parseFloat(displayValue);
            firstNumber = operate(operator, firstNumber, secondNumber);
            display.value = firstNumber;
        }
        operator = value;
        displayValue = '';
        waitingForSecondNumber = true;
    } else if (value === '=') {
        if (operator && displayValue !== '') {
            secondNumber = parseFloat(displayValue);
            const result = operate(operator, firstNumber, secondNumber);
            display.value = result;
            // Reset for next calculation
            firstNumber = result;
            operator = null;
            displayValue = '';
        }
    }
    });
});
// Step 6: Add keyboard support
document.getElementById('backspace').addEventListener('click', () => {
    displayValue = displayValue.slice(0, -1);
    display.value = displayValue;
});
// Add keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (! isNaN(key)) {
        displayValue += key;
        display.value = displayValue;
    } else if (key === '.' && !displayValue.includes('.')) {
        displayValue += '.';
        display.value = displayValue;
    } else if (['+', '-', '*', '/'].includes(key)) {
    } else if (key === 'Enter' || key === '='){
    } else if (key === 'Backspace') {
        displayValue = displayValue.slice(0, -1);
        display.value = displayValue;
    } else if (key.toLowerCase() === 'c'){
    }
});
