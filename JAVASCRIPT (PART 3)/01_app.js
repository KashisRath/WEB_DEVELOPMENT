let msg="      hello     ";

let password=prompt("set your password");
console.log(password.trim());

let name="   apna college   "

let msg1="ILOVECODING"
console.log(msg1.indexOf("LOVE"))

let newmsg=name.trim().toUpperCase();
console.log(newmsg)
console.log(name.slice(4,msg.length))
console.log(name.slice(-5))
console.log(name.replace("apna","do"))
console.log(name.repeat(3))

//array
let cars=['audi','bmw','xuv','maruti']
console.log(cars)
cars.push('toyota');
console.log(cars)
cars.pop()
console.log(cars)
cars.unshift("mercedes")
console.log(cars)
cars.shift()
console.log(cars)

//concat array
let primary=['red','yellow','blue'];
let secondsry=['orange','green','violet'];
let allcolors=primary.concat(secondsry)
console.log(allcolors)
console.log(primary.reverse())
//do the concat array in the console in the vs code it is not working

//slice
console.log("slice")
console.log(cars.slice(2))
console.log(cars)
console.log(cars.slice(2,3))
console.log(cars)
console.log(cars.slice(-2))
console.log(cars)

//splice
console.log("splice")
console.log(cars.splice(2))
console.log(cars)
console.log(cars.splice(2,3))
console.log(cars)
console.log(cars.splice(-1))
console.log(cars)

//sorting
let cars1=['audi','bmw','xuv','maruti']
console.log(cars1.sort())