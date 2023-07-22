let num = 80;
if ((num % 10) == 0) {
    console.log("the number is divisible by 10")
}
else {
    console.log("not divisible")
}

let name = prompt("enter the name");
let age = prompt("enter the age");
alert(`${name} is ${age} rears`)

let quarter = 1;
switch (quarter) {
    case 1: console.log("January, February, March");
        break;
    case 2: console.log("April, May, June");
        break;
    case 3: console.log("July, August, September");
        break;
    case 4: console.log("October, November, December");
        break;
    default: console.log("NOT A QUARTER!");
}

let str = 'apple';
if (((str = 'a') || (str = 'A')) && str.length > 5) {
    console.log('it is golden')
}
else {
    console.log('it is not golden')
}

let a = 5;
let b = 18;
let c = 13;

if (a > b) {
    if (a > c) {
        console.log(a, "is largest");
    } else {
        console.log(c, "is largest");
    }
} else {
    if (b > c) {
        console.log(b, "is largest");
    } else {
        console.log(c, "is largest");
    }
}

let num1 = 32;
let num2 = 47852;
if( (num1%10) == (num2%10)) {
console.log("numbers have the same last digit which is",
num1%10);
} else {
console.log("numbers don't have the same last digit");
}