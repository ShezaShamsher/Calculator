#! /usr/bin/env node 

import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
      message: "first number",
      type: "number",
      name: "num1",
    },
    {
      message: "Second number",
      type: "number",
      name: "num2",
    },
    {
      message: "select one of the operator",
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
    console.log("Your value is", answer.num1 + answer.num2);
  } else if (answer.operator === "Subtraction") {
    console.log("Your value is", answer.num1 - answer.num2);
  } else if (answer.operator === "Multiplication") {
    console.log("Your value is", answer.num1 * answer.num2);
  } else if (answer.operator === "Division") {
    console.log("Your value is", answer.num1 / answer.num2);
  } else if (answer.operator === "modulus") {
    console.log("Your value is", answer.num1 % answer.num2);
  } else if (answer.operator === "Expontention") {
    console.log("Your value is", answer.num1 ** answer.num2);
  } else {
    console.log("Invalid operator");
  }
  