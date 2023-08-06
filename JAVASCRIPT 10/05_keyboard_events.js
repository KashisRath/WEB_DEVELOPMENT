let btn=document.querySelector("button");
btn.addEventListener("click",function(event){
    console.log(event);
    console.log("button clicked");
})
btn.addEventListener("dblclick",function(event){
    console.log(event);
    console.log("button clicked");
})


let inp=document.querySelector("input");

// inp.addEventListener("keydown",function(event)
// {
//     console.log("key= ",event.key);
//     console.log("code= ",event.code);
//     console.log("key was pressed");
// })


inp.addEventListener("keydown",function(event){
    console.log("code= ",event.code);//arrowup,arrowdown,arrowleft,arrowright
    if(event.code=="ArrowUp")
    {
        console.log("char moves forward");
    }
    else if(event.code=="ArrowDown")
    {
        console.log("char moves back");
    }
    else if(event.code=="ArrowLeft")
    {
        console.log("char moves left");
    }
    else if(event.code=="ArrowRight")
    {
        console.log("char moves right");
    }
})
