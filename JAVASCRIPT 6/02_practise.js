//practise problem 1
console.log("");
console.log("practise probe 1--");
function rollDice(){
    let rand=Math.floor(Math.random()*6)+1;
    console.log(rand);
}

rollDice();

//practise problem 2
console.log("");
console.log("practise probe 2--");
function average(a,b,c){
    let avg=(a+b+c)/3;
    console.log(avg);
}
average(4,5,6)

//practise problem 3
console.log("");
console.log("practise probe 3--");
function multiplicationTable(n){
    for(let i=n;i<=n*10;i+=n){

        console.log(i);
    }
}
multiplicationTable(2);

//practise problem 4
console.log("");
console.log("practise probe 3--");
function SumOfNumbers(n){
    let sum=0;
    for(let i=1;i<=n;i++){
         sum=sum+i;
    }
    return sum;
}
console.log(SumOfNumbers(5));

//practise problem 4
console.log("");
console.log("practise probe 3--");
let str=["hi","hello","bye","!"];
function ConcatinationOfString(str){
    let result="";
    for(let i=0;i<=str.length;i++){
        result=result+str[i];
    }
    return result;
}
console.log(ConcatinationOfString(str));
