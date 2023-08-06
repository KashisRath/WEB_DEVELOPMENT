// let btns=document.querySelectorAll("button");



// for(btn of btns){
    // btn.onclick=sayHello;
    // btn.onclick=sayName;
    
    // btn.addEventListener("click",sayHello);
    // btn.addEventListener("click",sayName);
    // btn.addEventListener("dblclick",function(){
    //     console.log("you double clicked me");
    // });
//}
function sayHello()
{
    alert("Hello!");
}

function sayName()
{
    alert("apna college");
}



let p=document.querySelector('p');
p.addEventListener("click",function(){console.log("you clicked the paragraph.")});
let box=document.querySelector('.box');
box.addEventListener("mouseenter",function(){console.log("mouse inside div")});



let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    console.dir(this.innerText);
    this.style.backgroundColor="blue";
})