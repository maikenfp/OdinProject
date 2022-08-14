/*
1. Første tall må lagres og dukke opp på skjermen
2. Må lagre hvilken operasjon som blir valgt
3. Må lagre andre tall og sende videre alt til utregning og så oppdatere skjerm
*/



//Functionality
let firstOperand = ''
let secondOperand = ''
let currentOperation = null
const number = document.querySelectorAll('.number');
const op = document.querySelectorAll('.operator');
const display = document.getElementById('display');
const prevdisplay = document.getElementById('prev_display');
const clear = document.querySelector('.clear');
const equalbtn = document.querySelector('.equal');

//Update display
function updateDisplay(){
    display.textContent = firstOperand;
    if(secondOperand !== '' && currentOperation !== null){
        prevdisplay.textContent = secondOperand + " " + currentOperation;
    }
}

function appendNumber(number){
    firstOperand += number
}

//Round the total number
function roundResult(number) {
    return Math.round(number * 1000) / 1000
}

//Set and store the chosen operation
function setOperation(op) {
    if(currentOperation === '') return
    if(secondOperand !== ''){
        operator()
    }
    currentOperation = op;
    secondOperand = firstOperand;
    firstOperand = ''
}

// function clearScreen() {
//     firstOperand = ''
//     secondOperand = ''
//     currentOperation = null
// }

//When a number is pressed, send value to update display
number.forEach(btn => {
    btn.addEventListener('click', () => {
        appendNumber(btn.textContent);
        updateDisplay();
    })
});

//When an operation is pressed send and store value 
op.forEach(btn => {
    btn.addEventListener('click', () => {
        setOperation(btn.value);
        updateDisplay();
    })
});

//When clear btn is pressed, reset all stats
 clear.addEventListener('click', () => {
    clearScreen()
});

function clearScreen() {
    firstOperand = ''
    secondOperand = ''
    currentOperation = null
    display.textContent = ''
    prevdisplay.textContent = ''
}

equalbtn.addEventListener('click', () => {
    operator()
    updateDisplay()
})




//Operations

function add(a, b) {
    return (a + b);
}

function subtract(a, b) {
    return (a - b);
}

function multiply(a, b) {
    return (a * b);
}

function divide(a, b) {
    return (a / b);
}

function operator() {
    let computation
    let a = Number(secondOperand)
    let b = Number(firstOperand)
    switch(currentOperation){
        case '+':
            computation = add(a, b)
            break
        case '-':
            computation = subtract(a, b)
            break
        case '*':
            computation = multiply(a, b)
            break
        case '/':
            computation = divide(a, b)
            break
        default:
            return
    }

    firstOperand = computation
    currentOperation = null
    secondOperand = ''
}

