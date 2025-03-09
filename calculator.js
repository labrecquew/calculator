document.addEventListener("DOMContentLoaded", function () {
    const display = document.querySelector(".display");
    let numOne = "";
    let numTwo = "";
    let operator = "";
    let resultDisplayed = false;
    
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
                result = num2 === 0 ? "Error" : divide(num1, num2);
                break;
        }
        return result !== "Error" ? parseFloat(result.toFixed(12)) : result;
    }

    function add(a, b) { return a + b; }
    function subtract(a, b) { return a - b; }
    function multiply(a, b) { return a * b; }
    function divide(a, b) { return a / b; }
    
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function () {
            const value = this.textContent;
            
            if (!isNaN(value) || value === ".") {
                if (resultDisplayed) {
                    numOne = value;
                    numTwo = "";
                    operator = "";
                    resultDisplayed = false;
                } else if (!operator) {
                    numOne += value;
                } else {
                    numTwo += value;
                }
            } else if (["+", "-", "*", "/"].includes(value)) {
                if (numOne && !numTwo) {
                    operator = value;
                    resultDisplayed = false;
                } else if (numOne && numTwo) {
                    numOne = operate(parseFloat(numOne), parseFloat(numTwo), operator).toString();
                    numTwo = "";
                    operator = value;
                    resultDisplayed = false;
                }
            } else if (value === "=") {
                if (numOne && numTwo && operator) {
                    numOne = operate(parseFloat(numOne), parseFloat(numTwo), operator).toString();
                    numTwo = "";
                    operator = "";
                    resultDisplayed = true;
                }
            } else if (value === "C") {
                numOne = "";
                numTwo = "";
                operator = "";
                resultDisplayed = false;
            } else if (value === "🔙") {
                if (numTwo) {
                    numTwo = numTwo.slice(0, -1);
                } else if (operator) {
                    operator = "";
                } else {
                    numOne = numOne.slice(0, -1);
                }
            }
            
            display.textContent = numOne + " " + operator + " " + numTwo;
        });
    });
    
    document.querySelector(".linkedin").addEventListener("click", function () {
        window.open("https://linkedin.com/in/weston-labrecque-b786742a1", "_blank");
    });
    
    document.querySelector(".github").addEventListener("click", function () {
        window.open("https://github.com/labrecquew", "_blank");
    });
});