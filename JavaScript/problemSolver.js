function add7(number) {
    return number + 7;
}

function multiply(num1, num2){
    return num1 * num2;
}

function capitalize(string) {
    return string.replace(string[0], string[0].toUpperCase());
}

function lastLetter(string) {
    return string.slice(-1);
}

function solveProblems(n){
    for(let i = 1; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        } else if(i % 5 === 0){
            console.log("Buzz");
        } else if(i % 3 === 0){
            console.log("Fizz");
        } else {
            console.log(i);
        }
        
    }
}

solveProblems(100);