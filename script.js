
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

let displayVal = document.querySelector('.display');
let clearBtn = document.querySelector('#clear');

let oneBtn = document.querySelector('#one');
let twoBtn = document.querySelector('#two');

clearBtn.addEventListener('click', () => {
    displayVal.textContent = "";
})

oneBtn.addEventListener('click', () => {
    displayVal.textContent += oneBtn.textContent;
})

twoBtn.addEventListener('click', () => {
    displayVal.textContent += twoBtn.textContent;
})