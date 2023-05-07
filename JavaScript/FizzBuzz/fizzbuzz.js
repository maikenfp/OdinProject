/* take user input
print numbers from 1 to user inputs number
but number%3 == 0 print fizz instead of number
for number%5 == 0 print buzz instead of number
for both 3 AND 5 % == 0 fizzbuzz*/

function fizzBuzz(){
    let inputNumber = prompt("enter number");

    for(let i = 1; i <= inputNumber; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz");
        } else if(i % 5 == 0){
            console.log("Buzz");
        } else if(i % 3 == 0){
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();