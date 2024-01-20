
function add(a, b) {
    let result = 0;
    result = Number(a) + Number(b);
    
    // console.log(result);
    return result;
}

function subtract(a, b) {
    let result = 0;
    result = a - b;

    // console.log(result);
    return result;
}

function multiply(a, b) {
    let result = 0;
    result = a * b;

    // console.log(result);
    return result;
}

function divide(a, b) {
    let result = 0;

    if (b == 0) {
        return "You can't divide by zero";
    } else {
    result = a / b;
    }

    // console.log(result);
    return result;
}

let firstNum;
let operatorSign;
let secondNum;

function operate(firstNum, operatorSign, secondNum) {

    if (operatorSign == "+") {
        return add(firstNum, secondNum);
    } else if (operatorSign == "-") {
        return subtract(firstNum, secondNum);
    } else if (operatorSign == "x") {
        return multiply(firstNum, secondNum);
    } else if (operatorSign == "%") {
        return divide(firstNum, secondNum);
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
//nodlist for all operator buttons
const operators = document.querySelectorAll('div.operator');

const equalSign = document.querySelector('#equal');

//update display and display value with the respective numbers when
//numbers are clicked
numbers.forEach(number => {
    number.addEventListener('click', event => {
        display.textContent += number.textContent;
        displayVal = display.textContent;

    })

    number.addEventListener('mousedown', event => {
        number.classList.add('gray');
    })
    number.addEventListener('mouseup', event => {
        number.classList.remove('gray');
    })
});

//change operators button color when pressing down
operators.forEach(operator => {

    operator.addEventListener('click', event => {
        display.textContent = "";
        operatorSign = operator.textContent;
        firstNum = displayVal;
        displayVal = "";
    })

    operator.addEventListener('mousedown', event => {
        operator.classList.add('yellow');
    })
    operator.addEventListener('mouseup', event => {
        operator.classList.remove('yellow');
    })
})

equalSign.addEventListener('click', event => {
    secondNum = displayVal;

    if (Number.isInteger(operate(firstNum, operatorSign, secondNum)) == false 
    && typeof operate(firstNum, operatorSign, secondNum) == 'number' ) {

        display.textContent = operate(firstNum, operatorSign, secondNum).toFixed(2);

    } else {

        display.textContent = operate(firstNum, operatorSign, secondNum);

    }

    displayVal = display.textContent;
    firstNum = displayVal; 
})

//clear display when clicking clear button
clearBtn.addEventListener('click', () => {
    display.textContent = "";
    displayVal = display.textContent;
    firstNum = displayVal;
})
//change clear button color when pressing down
clearBtn.addEventListener('mousedown', event => {
    clearBtn.classList.add('red');
})
clearBtn.addEventListener('mouseup', event => {
    clearBtn.classList.remove('red');
})

