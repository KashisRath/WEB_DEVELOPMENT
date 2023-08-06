let input=document.querySelector("input");
let ul=document.querySelector("ul");
let li=document.querySelector("li");
let button=document.querySelector("button");

button.addEventListener("click",function(){

    let items=document.createElement("li");
    items.innerText=input.value;

    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete")

    items.appendChild(delBtn)
    ul.appendChild(items)
    console.log(input.value);
    input.value="";
})

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listitems=event.target.parentElement;
        console.log(listitems);
        listitems.remove();
        console.log("delete")
    }
    else{
        console.log("don't delete");
    }

})
// let delBtns=document.querySelectorAll(".delete");
// for(delBtn of delBtns)
// {
//     delBtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }