const square=(n)=>n*n;
console.log(square(4));

let id=setInterval(()=>{
    console.log("hello world");//window
},2000);
setTimeout(()=>{
    clearInterval(id);
    console.log("clear interval ran");
},10000);