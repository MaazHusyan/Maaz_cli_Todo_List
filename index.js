#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todosQuest = await inquirer.prompt([
        {
            name: "firstQuest",
            type: "input",
            message: "What do you want to add in your todos ?"
        },
        {
            name: "secondQuest",
            type: "confirm",
            message: "Would you like to add more ?",
            default: "true"
        }
    ]);
    todos.push(todosQuest.firstQuest);
    condition = todosQuest.secondQuest;
    console.log(todos);
}
