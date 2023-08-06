h1=document.querySelector("h1");

// function changeColor(color,delay)
// {
//     setTimeout(()=>{
//         h1.style.color=color;
//     },delay);
// }


// changeColor("red",1000);
// changeColor("orange",2000);
// changeColor("green",3000);

//or

// setTimeout(()=>{
//     h1.style.color="red";
// },1000);

// setTimeout(()=>{
//     h1.style.color="ORANGE";
// },2000)

// setTimeout(()=>{
//     h1.style.color="GREEN";
// },3000);

//or

function changeColor(color,delay,nextcolorChange)
{
    setTimeout(()=>{
        h1.style.color=color;
        if (nextcolorChange) nextcolorChange();
    },delay);
}

changeColor("red",1000,()=>{
    changeColor("orange",1000,()=>{
        changeColor("green",1000,);
    })
})
