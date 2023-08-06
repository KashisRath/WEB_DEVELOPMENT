//array method
console.log("");
console.log("arraymap---")
let arr=[1,2,3,4,5];

let print=function(el){
    console.log(el);
}

arr.forEach(print)


let arr2=[
    {
        name:"aman",
        marks:95,
    },
    {
        name:"shradha",
        marks:94.4,
    },
    {
        name:"rajat",
        marks:92,
    },
];

arr2.forEach((student)=>{
    console.log(student);
})

//map 
console.log("");
console.log("map&filter---");

let num=[1,2,3,4];

let double=num.map((el)=>{
   return el*el; 
})
console.log(double)

console.log("");
let gpa=arr2.map((el)=>
{
    return el.marks/10;
})
console.log(gpa);


//filter
console.log("");
console.log("filter---")
let nums=[1,2,3,4,7,8,2,9,10,12,11]
let ans=nums.filter((el)=>{
    return (el%2)==0;
})
console.log(ans);

//every and some
console.log("");
console.log("every&some--");
console.log([2,4,6].every((el)=>el%2==0));
console.log([2,4,6,1].every((el)=>el%2==0));
console.log([2,4,6,8,9].some((el)=>el%2==0));
console.log([1,3].some((el)=>el%2==0));


//reduce
console.log("");
console.log("reduce--");
let nums2=[1,2,3,4];
let finalVal=nums2.reduce((res,el)=>res+el)
console.log(finalVal)

console.log("");
let arr3=[1,4,2,5,6,7,2,9,2];

// let max=-1;

// for(let i=0;i<arr3.length;i++){
//     if(max<arr3[i]){
//         max=arr3[i];
//     }
// }
// console.log(max);

let max=arr3.reduce((max,el)=>{
     if(max<el)
     {
        return el;
     }
     else{
        return max;
     }
});
console.log(max);


//default parameter
console.log("");
console.log("default parameter----");
function sum(b,a=2)
{
    return a+b;
}
console.log(sum(1,3));
console.log(sum(1))

//spread
console.log("");
console.log("spread----");
let arr5=[1,2,3,1,2,3,0,1,2,3,1,2,3,0]
console.log(Math.min(...arr5));
console.log(..."kashisrath")


//spread array literals
console.log("");
console.log("literals----");
let arr6=[1,2,3,4,5];
let newArr6=[...arr6]
console.log(newArr6);

let chars=[..."hello"];
console.log(...chars)

let even=[2,4,6,8];
let odd=[1,3,5,7];
console.log(...even,...odd);

//spread(object literals)
console.log("");
console.log("object literals----");
const data={
    email:"ironman@gmail.com",
    password:"abcd",
};

const datacopy={...data,id: 123};
console.log(datacopy)

let arr7=[1,2,3,4,5];//val
console.log(arr7)

let obj1={...arr7};//obj->key:val
console.log(obj1)

let obj2={..."hello"};
console.log(obj2)


//rest
console.log("");
console.log("rest----");

function sum(...args){
    //arguments
    for(let i=0;i<args.length;i++)
    {
        console.log("you gave us: ",args[i]);
    }
}
console.log(sum(1,2,3));

function min1(a,b,c,d)
{
    console.log(arguments);
    console.log(arguments.length);
}

console.log(min1(1,2,3,4));


function min(...args){
    return args.reduce((min,el)=>
       {
          if(min>el)
          {
            return el;
          }
          else
          {
            return min;
          }
       }
    )
}

console.log(min(1,5,6));

function sum(...args)
{
    return args.reduce((sum,el)=>sum+el);
}

console.log(sum(2,5,7));

function min1(msg,...args){
    console.log(msg);
    return args.reduce((min,el)=>
       {
          if(min>el)
          {
            return el;
          }
          else
          {
            return min;
          }
       }
    )
}

console.log("kashisrath",min1(1,5,6));


//destructuring and rest
let names=["tony","burce","peter","steve","abc","xyz","pyq"];
//let winner=names[0];
//let runerup=names[1];
let [winner,runnerup,...others]=names;
console.log(names);
console.log(winner);
console.log(runnerup);
console.log(others);


//destructing (objects)
const students={
    name:"kashis",
    age:14,
    class:9,
    subjects:["hindi","english","math","science"],
    username:"kashisrath@123",
    password:"abcd",
};

let {username:user,password:secret,city="Mumbai"}=students;
console.log(students);
console.log(user);
console.log(secret);
console.log(city);