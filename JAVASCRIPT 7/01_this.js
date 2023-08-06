//this keyword
const student={
    name:"kashis",
    age:19,
    eng:95,
    math:93,
    phy:97,
    getAvg(){
        console.log(this);
        let avg=(this.eng + this.math+this.phy)/3;
        console.log(`${this.name} got avg marks =${avg}`);
    }
}
 
// student.getAvg();

function getAvg(){
    console.log(this);
}

getAvg();



//try and catch
console.log("hello");
console.log("hello");
console.log("hello");
try{
    console.log(a);
}catch{
    console.log("caught an error... a is not defined");
}
console.log("hello");
console.log("hello");
console.log("hello");


//miscellaneous topics
//1)arrow functions
console.log("")
console.log("arrow function---")
const sum=(a,b)=>{console.log(a+b);

};
sum(2,3);

const cube=(n)=>{console.log(n*n*n);

};
cube(2);

//2)implicit return in te arrow function
console.log("")
console.log("implicit return in te arrow function---")
const mul=(a,b)=>a*b;
console.log(mul(2,3));


//3)set timeout
console.log("");
console.log("set timeout---");
console.log("Hii there");
setTimeout(()=>{
    console.log("apna college")
},4000);
console.log("Welcome to")

//4)set interval
console.log("");
console.log("set interval---");
let id=setInterval(() => {
    console.log("Apna College");
},2000);
console.log(id);
clearInterval(id);//to clear the interval


//this with arrow functions
console.log("");
console.log("this with arrow functions---");
const student1={
     name:"aman",
     marks:95,
     prop:this,//global scope
     getName:function(){
        console.log(this);
        return this.name;
     },
     getMarks:()=>{
        console.log(this);//parentscope ->window
        return this.marks;
     },
     getInfo1:function(){
        setTimeout(()=>{
            console.log(this);//student
        },2000);
     },
     getInfo2:function(){
        setTimeout(function(){
            console.log(this);//window
        },2000);
     }
};
// console.log(student1.getInfo1());
console.log(student1.getInfo2());
// console.log(student1.getMarks());
// console.log(student1.getName());

