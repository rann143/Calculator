
function add(a, b) {
    let result = 0;
    result = a + b;
    
    console.log(result);
    return result;
}

function subtract(a, b) {
    let result = 0;
    result = a - b;

    console.log(result);
    return result;
}

function multiply(a, b) {
    let result = 0;
    result = a * b;

    console.log(result);
    return result;
}

function divide(a, b) {
    let result = 0;
    result = a / b;

    console.log(result);
    return result;
}

let firstNum;
let operator;
let secondNum;

function operate(firstNum, operator, secondNum) {

    if (operator == "+") {
        add(firstNum, secondNum);
    } else if (operator == "-") {
        subtract(firstNum, secondNum);
    } else if (operator == "*") {
        multiply(firstNum, secondNum);
    } else if (operator == "/") {
        divide(firstNum, secondNum);
    } else {
        return "OOPS";
    }

}

//variable for display
const display = document.querySelector('.display');

//variable for display value
let displayVal = display.textContent;

//variable for clear button
const clearBtn = document.querySelector('#clear');

//nodelist for all number buttons
const numbers = document.querySelectorAll('div.number');

//update display and display value with the respective numbers when
//numbers are clicked
numbers.forEach(number => {
    number.addEventListener('click', event => {
        display.textContent += number.textContent;
        displayVal = display.textContent
    })
});

//clear display when clicking clear button
clearBtn.addEventListener('click', () => {
    display.textContent = "";
})