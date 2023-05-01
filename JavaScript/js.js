let a = 10;
let b = 7 * a;

//console.log(b);

const max = 57;
const actual = max - 13;
const percentage = actual / max;

function capitalize(word) {
    let test = word.charAt(0).toUpperCase();
    let test1 = word.slice(1).toLowerCase();
    let test2 = test + test1;
    console.log(test2);
}

function lastLetter(word) {
    const arr = [...word];
    console.log(arr.slice(-1));
}

capitalize("hey");
capitalize("hEdHyH");
lastLetter("hEdHyH");