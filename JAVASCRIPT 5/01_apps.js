const student={
    name:"kashis",
    age:19,
    marks:94.4
}

let student2 =["kashis",23,94.4]

//twitter/thread post
const post={
    username:"@kashisrath",
    content:"this is my first post",
    likes: 150,
    reposts: 5,
    tags:["@apnacollege","delta"]
}

//get values
console.log(post.content)
console.log(post["content"])
let prop="reposts";
console.log(post[prop])
console.log(post.prop)//it will print undefine cond . so if we use let the we only can print by above way console.log(post[prop])


//coversion obj
const obj={
    1:"a",
    2:"b",
    true:"c",
    null:"d",
    undefined:"e"
}
console.log(obj[1])
console.log(obj[2])
console.log(obj[true])
console.log(obj[null])
console.log(obj[undefined])
console.log(obj.null)
console.log(obj.true)
console.log(obj.undefined)
// console.log(obj.1) wrong