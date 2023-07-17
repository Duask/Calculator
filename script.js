//Calculator
let firstNumber = '';
let operator = '';
let secondNumber = '';
let display = document.getElementById('display');

//Put on the buttons a function tha gets their value and puts it on a variable
const number = document.getElementsByClassName('number');
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', addNumber);
}

function addNumber(e){
    let n = getValue(e);
    if(!operator){
        if(n === '.'){
            if(firstNumber.indexOf('.') !== -1){
                return
            }
        }
        firstNumber += n;
    } else {
        if(n === '.'){
            if(secondNumber.indexOf('.') !== -1){
                return
            }
        }
        secondNumber += n;
    }
    updateDisplay()
}

function getValue(e) {
    return e.target.innerText;
}

function updateDisplay(){
    display.innerText = `${firstNumber} ${operator} ${secondNumber}`;
}

// When a variable is already set and an operator is clicked hte operator is saved on another variable
const op = document.getElementsByClassName('op');
for (let i = 0; i < op.length; i++) {
    op[i].addEventListener('click', setOp);
}

function setOp(e) {
    let op = getValue(e);
    operator = op;
    updateDisplay()
}

//When the equality button is clicked make the calculation
const equity = document.getElementById('equal');
equity.addEventListener('click', calculate);

function calculate() {
    switch (operator) {
        case '+':
            add(firstNumber,secondNumber);
            break;
        case '-':
            min(firstNumber,secondNumber);
            break;
        case 'x':
            mult(firstNumber,secondNumber);
            break;
        case '/':
            div(firstNumber,secondNumber);
            break;
        case '^':
            exp(firstNumber,secondNumber);
            break;
        default:
            break;
    }
}

function add(x, y) {
    let result = Number(x) + Number(y);
    cln();
    result = result.toFixed(2);
    firstNumber = result;
    display.innerText = result;
}

function min(x, y) {
    let result = Number(x) - Number(y);
    cln();
    result = result.toFixed(2);
    firstNumber = result;
    display.innerText = result;
}

function mult(x, y) {
    let result = Number(x) * Number(y);
    cln();
    result = result.toFixed(2);
    firstNumber = result;
    display.innerText = result;
}

function div(x, y) {
    let result = Number(x) / Number(y);
    cln();
    result = result.toFixed(2);
    firstNumber = result;
    display.innerText = result;
}

function exp(x, y) {
    let result = Number(x) ** Number(y);
    cln();
    result = result.toFixed(2);
    firstNumber = result;
    display.innerText = result;
}

//Function clear to erase everything in the display
const clr = document.getElementById('clear');
clr.addEventListener('click', clear);

function clear() {
    display.innerText = '';
    cln();
}

function cln() {
    firstNumber = '';
    secondNumber = '';
    operator = '';
}
