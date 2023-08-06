let input=document.createElement("input");
let btn=document.createElement("button");
btn.innerText="click me";

document.querySelector("body").append(input);
document.querySelector("body").append(btn);


//2
btn.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

//3
let btn1=document.querySelector("#btn")
btn1.classList.add("btnStyle");


//4
let h1=document.createElement("h1");
h1.innerHTML="<u>DOM PRACTISE</u>"
document.querySelector("body").append(h1);

//5
let p=document.createElement("p");
p.innerHTML="APNA COLLEGE <b>DELTA</b> PRACTISE"
document.querySelector("body").append(p);