let btn=document.createElement("button")
btn.innerText="click me";
document.querySelector("body").append(btn);
btn.addEventListener("click",function(){
    this.style.backgroundColor="green";
})

let input=document.createElement("input");
input.setAttribute("placeholder","wnter your name");
document.querySelector("body").append(input);
