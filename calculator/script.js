/*
1. Første tall må lagres og dukke opp på skjermen
2. Må lagre hvilken operasjon som blir valgt
3. Må lagre andre tall og sende videre alt til utregning og så oppdatere skjerm
*/



//Functionality
let prevOperand = ''
let currentOperand = ''
let currentOperation = null
const number = document.querySelectorAll('.number');
const op = document.querySelectorAll('.operator');
const display = document.getElementById('display');
const prevdisplay = document.getElementById('prev_display');
const clear = document.querySelector('.clear');
const equalbtn = document.querySelector('.equal');
const del = document.querySelector('.delete');

//Update display
function updateDisplay(){
    display.textContent = prevOperand;
    if(currentOperand !== '' && currentOperation !== null){
        prevdisplay.textContent = currentOperand + " " + currentOperation + " " + prevOperand;
    }
}

// Append number
function appendNumber(number){
    if(number === '.' && prevOperand.includes('.')) return
    prevOperand += number
}

//Round the total number
function roundResult(number) {
    return Math.round(number * 1000) / 1000
}

//Set and store the chosen operation
function setOperation(op) {
    if(currentOperation === '') return
    if(currentOperand !== ''){
        operator()
    }
    currentOperation = op;
    currentOperand = prevOperand;
    prevOperand = ''
}

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
    prevOperand = ''
    currentOperand = ''
    currentOperation = null
    display.textContent = ''
    prevdisplay.textContent = ''
}

//When equal button is pressed, calculate operation
equalbtn.addEventListener('click', () => {
    operator()
    updateDisplay()
})

//Delete btn

del.addEventListener('click', () => {
    prevOperand = prevOperand.toString().slice(0, -1);
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
    let a = Number(currentOperand)
    let b = Number(prevOperand)

    if(prevOperand === '' || currentOperand === ''){
        alert('You must specify two numbers and an operation')
        clearScreen()
    }

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

    prevOperand = computation
    currentOperation = null
    currentOperand = ''
}

