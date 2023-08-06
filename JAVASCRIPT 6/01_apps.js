function hello()
{
    console.log("hello");
}

function printName()
{
    console.log("kashis");
}

function print1to5()
{
    for(let i=1;i<=5;i++)
    {
        console.log(i);
    }
}

function isAdult()
{
    let age=18;
    if(age>=18)
    {
        console.log("adult");
    }
    else{
        console.log("not adult")
    }
}

hello();
printName();
print1to5();
isAdult();


//function parameter
function printInfo(name,age)
{
    console.log(`${name}'s age is ${age}`)
}

printInfo("kashis",19)

//block scope

// {
//     let a=24;
// }
// console.log(a)-->give error

// {
//     const a=24;
// }
// console.log(a)-->will give error

{
    var a=24;
}
console.log(a)


//lexical scope
function outerfunction()
{
    let x = 89;
    let y = 38;
    function innerfunction()
    {
        console.log(y);
        console.log(x);
    }
    
    innerfunction();
}
outerfunction();


//function expression
let name="kashis";
let x=5;

let sum1=function(a,b) 
{
    return a+b;
}

let hello1=function() 
{
    console.log("hello");
}

console.log(sum1(1,2));
console.log(hello());

//higher order precedence
function multipleGreet(func,count)
{
    for(let i=1;i<=count;i++)
    {
        func();
    }
}

let greet=function(){
    console.log("hello");
}
multipleGreet(function() {console.log("namaste")},1000)
multipleGreet(greet,1000)

//higher order function
function oddOrEvenFactory(request)
{
    if(request=="odd")
    {
        let odd = function(n)
        {
            console.log(!((n%2)==0));
        }
        return odd;
    }
    else if(request=="even")
    {
        let even = function(n)
        {
            console.log((n%2)==0);
        }
        return even;
    }
}

// let request ="odd";
// console.log(request);
// let func=oddOrEvenFactory(request);
// console.log(func(5));-->true

let request ="even";
console.log(request);
let func=oddOrEvenFactory(request);
console.log(func(5));

//methods
const calculator={
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    }
}

console.log(calculator)
console.log(calculator.sub(1,2))

const calculator1={
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    }
}

