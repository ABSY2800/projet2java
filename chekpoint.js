function reverseString(str) { 
    str=Array.from(str)
    str=str.reverse()
    str= str.join("")
    console.log(str)
  }

reverseString("hello word");

function longestword(str){
    let array=str.split("  ");

    return array.length;
}    
let string ="le javascript c'est cool hghtth hguyguyg htr !";
console.log(longestword(string));
function titleCase(str) {
    let words = str.split(" ");
    let newArray = [];

    words.forEach(word => {
        let firstLetter = word.charAt(0).toUpperCase();
        let replacement = word.replace(word.charAt(0), firstLetter);
        newArray.push(replacement);
    });

    console.log(newArray.join(' '));
}

titleCase('slt mondo');


function findMax(arr) {
    if (arr.length === 0) {
        return undefined; 
    }
    return Math.max(...arr);
}

function findMin(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    return Math.min(...arr);
}
var  numbers = [5, 2, 8, 6, 9];

var maxValue = findMax(numbers);
var minValue = findMin(numbers);

console.log("Maximum value:", maxValue); 
console.log("Minimum value:", minValue);

function arraySum(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
var numbers = [1, 2, 3, 4, 10];

var sum = arraySum(numbers);

console.log("La somme des èlèments", sum); 

function filterArray(arr, condition) {
    return arr.filter(condition);
}
var numbers = [1, 2, 3, 4, 5];

function isEven(num) {
    return num % 2 === 0;
}

var filteredArray = filterArray(numbers, isEven);

console.log("Filtered array:", filteredArray);

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
var result = factorial(5);

console.log("Factorial de 5:", result); 

function isPrime(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return'  12 nest pas un nombre premier';
        }
    }

    return true;
}
console.log(isPrime(7));
console.log(isPrime(12));

function fibonacciSequence(terms) {
    if (terms <= 0) {
        return [];
    } else if (terms === 1) {
        return [0];
    } else if (terms === 2) {
        return [0, 1];
    }

    let fibSequence = [0, 1];
    while (fibSequence.length < terms) {
        fibSequence.push(fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2]);
    }

    return fibSequence;
}
var result = fibonacciSequence(10);

console.log("Fibonacci sequence (first 10 terms):", result);




