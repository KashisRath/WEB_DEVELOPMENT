let arr = [7, 9, 0, -2];
let n = 3;
let ans1 = arr.slice(0, n);
console.log(ans1);
let ans2 = arr.slice(1);
console.log(ans2);


let str = prompt("please enter a string");
if (str.length == 0) {
    console.log("string is empty");
} else {
    console.log("string is not empty");
}

let str1 = prompt("please enter a string");

if (str1 == str1.toLowerCase()) {
    console.log("it is  in lower case");
} else {
    console.log("it is not in lower case");
}


let str3 = prompt("please enter a string");
console.log(`original string = ${str3}`);
console.log(`string without spaces = ${str3.trim()}`);


let arr1 = []

if (arr1 == null) {
    console.log("it is  null");
} else {
    console.log("it is not null");
}