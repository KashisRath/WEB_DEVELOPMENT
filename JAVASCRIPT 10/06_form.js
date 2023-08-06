let form=document.querySelector("form");
// form.addEventListener("submit",function(event){

    // event.preventDefault();
    // let user=document.querySelector("#user");
    // let pass=document.querySelector("#password");
    // console.dir(user);
    // console.log(user.value);
    // console.log(pass.value);

    //or
 
    // console.dir(form);
    // let user=this.elements[0];//form.elements[0]
    // let pass=this.elements[1];
    // console.log(user.value);
    // console.log(pass.value);
    // alert("form submitted");
    // alert(`Hi ${user.value}, your password is set to ${pass.value}`);


//});

let user=document.querySelector("#user");
user.addEventListener("change",function(event){
    event.preventDefault();
    console.log("input changed");
    console.log("final value= ",this.value);
})
user.addEventListener("input",function(event){
    event.preventDefault();
    console.log("input changed");
    console.log("final value= ",this.value);
})


let inp=document.querySelector("#text");
let p=document.querySelector("p");
inp.addEventListener("input",function(){
    console.log(inp.value);
    p.innerText=inp.value;
})
