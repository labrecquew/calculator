let numOne = 0;
let numTwo = 0;
let operater = '';
let input = [];
let output = [];
const oldNum = document.querySelector('.old')
const newNum = document.querySelector('.new')
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const specialButtons = document.querySelectorAll('.special');

numberButtons.forEach(button => {
    button.addEventListener('click', function() {
        input.push(parseInt(button.textContent));
        populateNewNum();
    })
})

function populateNewNum() {
    newNum.textContent = parseInt(input.join(''));
}

function populateOldNum() {
    oldNum.textContent = newNum.textContent;
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
        case '*':
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