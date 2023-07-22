//for loop
console.log("hello")

//infinite loop

//multiplication table
let n = prompt("write ypur number")
n = parseInt(n)
for (j = n; j <= n * 10; j = j + n) {
    console.log(j)
}

//while loop
let k = 0
while (k <= 20) {
    console.log(k);
    k++;
}

//favorite movie
const favorite = "avatar";
let guess = prompt("guess movie")
while ((guess != favorite) && (guess != 'quit')) {

    guess = prompt("guess is wrong try")
}
if (guess == favorite) {
    console.log("right guess")
}
else {
    console.log("movie is ", favorite)
}

let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]]

for (let i = 0; i < heroes.length; i++) {
    console.log(i, heroes[i], heroes[i].length)
    for (let j = 0; j < heroes[i].length; j++) {
        console.log(j, heroes[i][j] )

    }
}

//for of loops
for(hero of heroes)
{
    console.log(hero)
}

for(char of "kashisrath"){
    console.log(char)
}

//nested for of loops
for(hero of heroes)
{
   
     for(name of hero)
     {
        console.log(name)
     }
}