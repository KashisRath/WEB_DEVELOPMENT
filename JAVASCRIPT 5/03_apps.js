const max=prompt('enter the maximum no');
console.log(max);

const random=Math.floor(Math.random()* max) + 1;


let guess=prompt("guess the number");

while(true)
{
    if(guess=="quit")
    {
        console.log("user quit");
        break;
    }

    if(guess == random)
    {
        console.log("you are right!congrats!! random no is ",random);
        break;
    }
    else if(guess<random)
    {
        guess=prompt("your guess was too small.please try again");
    }
    else {
        guess=prompt("your guess was too large . please try again");
    }
}