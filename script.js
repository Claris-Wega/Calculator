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
            display.value = '';
        }
    });
});
