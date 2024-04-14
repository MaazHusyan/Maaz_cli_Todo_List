import inquirer from "inquirer";

let todos:string[] = [];
let condition:boolean = true;

while (condition) {
    let todosQuest = await inquirer.prompt([
        {
            name:"firstQuest",
            type:"input",
            message:"What do you want to add in your todos ?"
        },
        {
            name:"secondQuest",
            type:"confirm",
            message:"Would you like to add more ?",
            default:"true"
        }
    ]);
    todos.push(todosQuest.firstQuest);
    condition = todosQuest.secondQuest;
    console.log(todos);
    
}