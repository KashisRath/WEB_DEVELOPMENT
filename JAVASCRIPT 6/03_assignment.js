//1
console.log(" ");
let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;

function getElements(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            console.log(arr[i]);
        }
    }
}

getElements(arr, num)

//2
console.log(" ");
let str = "abcdabcdefgggh";

function uniqueCharacter(str) {
    let ans = " ";
    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
        if (ans.indexOf(currChar) == -1) {
            ans += currChar;
        }
    }
    return ans
}

let val = uniqueCharacter(str);
console.log(val)

//3
console.log(" ");
let list = ["australia", "germany", "unite state of america"];
let ans1 = "";
for (let i = 0; i < list.length; i++) {
    if (list[i] > ans1) {
        ans1 = list[i];
    }
}
console.log(ans1);


//4)
let str1 = "apnacollege";
function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u") {
            count++;
        }
    }
    return count;
}

let ans4 = countVowels(str);
console.log(ans4)


//5
let start = 100;
let end = 200;
function generateRandom(start, end) {
    let diff = end - start;
    return Math.floor(Math.random() * diff) +start;
}
console.log(generateRandom(start,end))


