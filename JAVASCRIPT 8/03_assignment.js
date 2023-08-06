function su(...args) {
    return args.reduce((sum, el) => sum + el);
}

let sum = su(1, 2, 3, 4, 5);
console.log(sum);

let nums = [1, 2, 3, 4, 5];
const square = nums.map((nums) => nums * nums);

let avg = sum / nums.length;
console.log(avg);



//2)
console.log("");
console.log("qs2----")

let numbers = [2, 4, 6, 8, -2, -4];
console.log(numbers.map((number) => number + 5));

//3)
console.log("");
console.log("qs3----");

let words=["apple","banana","orange","grape"];
console.log(words.map((words)=>words.toUpperCase()));

//4)
console.log("");
console.log("qs4----");
const doubleAndReturnArgs=(arr,...args) => [
    ...arr,...args.map((v)=>v*2),
];
console.log(doubleAndReturnArgs([1,2,3],3,5))


//5
console.log("");
console.log("qs5----");
function mergeObject(obj1,obj2)
{
    return {...obj1,...obj2}
};
const obj1={a:1,b:2};
const obj2={c:3,d:4};

const mergedObjects=mergeObject(obj1,obj2);
console.log(mergedObjects)