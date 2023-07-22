let todo=[];

let req=prompt("please enter your request")


while(true)
{
    if(req=="quit")
    {
        console.log("quiting app")
        break
    }

    if(req=="list")
    {
        console.log("------------")
        for(task of todo)
        {
            console.log(task);
        }
        console.log("------------")
    }
    else if(req=="delete"){
        let idx= prompt("please enter the task index");
        todo=todo.splice(idx,1);
        console.log("task deleted")
    }
    else if(req="add")
    {
        let task=prompt("please enter the task u want to add");
        todo.push(task)
        console.log("task added");
    }
    else{
        console.log("wrong request")
    }
    req=prompt("please enter your request");
   
}