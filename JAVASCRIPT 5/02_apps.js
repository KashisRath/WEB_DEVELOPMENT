//add or update
let student={
    name:"kashis",
    age:23,
    marks:95.5,
    city:"cuttack"
}
console.log(student)
student.city="bbsr"
console.log(student)
delete student.marks
console.log(student)

//nested objects
const classInfo={
    aman:{
        grade:"A+",
        city:"delhi"
    },
    shradha:{
        grade:"A",
        city:"pune"
    },
    karan:{
        grade:"B",
        city:"nakala"
    }
}

console.log(classInfo)
console.log(classInfo.aman)

//array of objects
const classInfo1=[
    {
        name:"kashis",
        grade:"A+",
        city:"delhi"
    },
    {
        name:"ashis",
        grade:"A",
        city:"pune"
    },
    {
        name:"mashis",
        grade:"B",
        city:"nakala"
    }
]
console.log(classInfo1)
console.log(classInfo1[1])
console.log(classInfo1[1].city)