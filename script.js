
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