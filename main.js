#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.underline.magentaBright(`\t\n "Welcome to codewithsheza - simple calculator"\n`));
const answer = await inquirer.prompt([
    {
        message: chalk.yellow.italic("first number"),
        type: "number",
        name: "num1",
    },
    {
        message: chalk.yellow.italic("Second number"),
        type: "number",
        name: "num2",
    },
    {
        message: chalk.yellow.italic("select one of the operator"),
        type: "list",
        name: "operator",
        choices: [
            "Addition",
            "Subtraction",
            "Multiplication",
            "Division",
            "modulus",
            "Expontention",
        ],
    },
]);
// Condition statement
if (answer.operator === "Addition") {
    console.log(chalk.redBright.bold.underline("\t\nYour value is", answer.num1 + answer.num2));
}
else if (answer.operator === "Subtraction") {
    console.log(chalk.redBright.bold.underline("\t\nYour value is", answer.num1 - answer.num2));
}
else if (answer.operator === "Multiplication") {
    console.log(chalk.redBright.bold.underline("\t\nYour value is", answer.num1 * answer.num2));
}
else if (answer.operator === "Division") {
    console.log(chalk.redBright.bold.underline("\t\nYour value is", answer.num1 / answer.num2));
}
else if (answer.operator === "modulus") {
    console.log(chalk.redBright.bold.underline("\t\nYour value is", answer.num1 % answer.num2));
}
else if (answer.operator === "Expontention") {
    console.log(chalk.redBright.bold.underline("\t\nYour value is", answer.num1 ** answer.num2));
}
else {
    console.log(chalk.blueBright.bold("Invalid operator"));
}
