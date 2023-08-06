//Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.
const arrayFunction = (arr) => {
    let total = 0;
    for (let number of arr) {
        total += number;
    }
    return total / arr.length;
}
let arr = [1, 2, 3, 4, 5, 6];
console.log(arrayFunction(arr));

//Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not.
let num = 45;
const isEven = (num) => ((num % 2) == 0);
if (isEven(num)) {
    console.log(num + " is even.");
} else {
    console.log(num + " is odd.");
}


//3)
const object = {
    message: 'Hello, World!',
    logMessage() {
        console.log(this.message);
    }
};
console.log(setTimeout(object.logMessage, 1000));
