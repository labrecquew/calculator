let numOne = 0;
let numTwo = 0;
let operator = '';
let input = [];
let operatorPos = 0;
let operatorList = ['+', '-', 'x', '/']
const oldNum = document.querySelector('.old')
const newNum = document.querySelector('.new')
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const specialButtons = document.querySelectorAll('.special');
const equalButton = document.querySelector('.equal');

numberButtons.forEach(button => {
    button.addEventListener('click', function() {
        input.push(parseInt(button.textContent));
        populateNewNum();
    })
})

operatorButtons.forEach(button => {
    let computedValue = null;
    button.addEventListener('click', function() {
        if(operator === '') {
                numOne = parseInt(input.join(''));
                operator = button.textContent;
                input.push(operator);
                operatorPos = input.length - 1;
                populateNewNum();
                emptyOldNum();
        }
        else if (!operatorList.includes(input[input.length - 1])) {
            populateOldNum();
            numTwo = parseInt(input.slice(operatorPos + 1).join(''));
            computedValue = operate(numOne, numTwo, operator);
            input = []
            input = Array.from(String(computedValue), Number)
            numOne = parseInt(input.join(''));
            operator = button.textContent;
            input.push(operator);
            operatorPos = input.length -1;
            populateNewNum();
        }
    })
})

function populateNewNum() {
    newNum.textContent = input.join('');
}

function populateOldNum() {
    oldNum.textContent = newNum.textContent;
}

function emptyOldNum() {
    oldNum.textContent = '';
}

function operate(num1, num2, operation) {
    let result = null;
    switch(operation) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case 'x':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
    }
    return result;
}

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
    return a / b;
}