#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; //Dollar
let myPin = 1234;

let pinAnswer = await inquirer.prompt(
    [
        {
    name : "q1",
    message : "Enter your pin",
    type : "number"
        }
    ]
);


//console.log(pinAnswer.q1);

if(pinAnswer.q1 == myPin){
    console.log("Correct Pin!!");

    let operationAns = await inquirer.prompt(
        [
            {
                name : "operation",
                message : "What operation do you want to perform?",
                type : "list",
                choices : ["withdraw", "Check Balance"]

            }
        ]
    );

    if (operationAns.operation == "withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name : "amount",
                    message : "How much do you want to withdraw?",
                    type : "number"
                }
            ]
        );
        if(amountAns.amount < myBalance){
            myBalance -= amountAns.amount;
            console.log(`Your remaining balance is ${myBalance}`);
        } else {
            console.log("Insufficient Balance!!");
        }
    }

    
    if (operationAns.operation == "Check Balance"){
        console.log (`Your remaining balance is ${myBalance}`)
    }


} else {
    console.log("Incorrect Pin!")
}