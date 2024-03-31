#! /usr/bin/env node

import inquirer from "inquirer";

console.log("------------------------------")
console.log(".          ATM CARD          .")
console.log("------------------------------")
console.log(".                            .")
console.log(". ID: 12341234     PIN:99090 .")
console.log(".                            .")
console.log(".    1143 2356 8892 5666     .")
console.log("------------------------------")

console.log("================================================")
console.log(".                                              .")
console.log(". Welcome To The International Bank Of Nothing .")
console.log(".                                              .")
console.log("================================================")

console.log("")
console.log("==============================")
console.log("Please Enter Your Credentials.")
console.log("==============================")

let user1_id:number = 12341234;
let user1_pin:number = 99090;


// This block of code will be executing everytime user put wronge Credentials.
do{
    var login = await inquirer.prompt([
        {
            message: "User ID",
            type: "number",
            name: "user_id",
        },
        {
            message: "User PIN",
            type: "number",
            name: "user_pin",
        },
    ]);
        
        // console.log(login);
        
        
    if(login.user_id === user1_id)
        {
            if(login.user_pin === user1_pin)
                {   
                    console.log("=====================")
                    console.log("Login was successfull")
                    console.log("=====================")
                    console.log();
                    console.log("Please wait ......");
                    console.log();
                }
            else 
                {   
                    console.log("========================================")
                    console.log("Sorry! The PIN you entered is incorrect.")
                    console.log("========================================")
                }
        }
    else
        {
            if(login.user_pin === user1_pin)
                {
                    console.log("======================================")
                    console.log("Sorry! No user with such ID was found.")
                    console.log("======================================")
                }
            else
                {
                    console.log("=================================")
                    console.log("You entered the wrong credentials")
                    console.log("=================================")
                }
        };
      
}while(login.user_id != 12341234 || login.user_pin != 99090)


// This block of code will be executed after the user puts coorect info.
let wid:number = 0;
let balc:number = 50000;
let exe = "running";

while(exe === "running"){
    var features = await inquirer.prompt([
        {
            message: "Select An Option",
            type: "list",
            name: "options",
            choices: ["Withdraw","Fast-Cash","Check Balance", "exit"],
        },
    ]);
    
    // Widthdraw feature:-----------------------------------------------------------------------------------
    if(features.options === "Withdraw")
        {
            console.log();
            console.log("---------------------------------------------------------");
            let ammount_in = await inquirer.prompt([
                {
                    message: "Enter a ammount to withdraw",
                    type: "number",
                    name: "ammount",
                }
            ])
            if(ammount_in.ammount > balc)
                {
                    console.log("-------------------------");
                    console.log(".         ERROR         .")
                    console.log(". Insufficient Ammount. .");
                    console.log("-------------------------");
                }
            else
                {                
                    balc -= ammount_in.ammount;
                    wid = ammount_in.ammount;
                    console.log();
                    console.log(`Succesfully Withdrawn Rs ${ammount_in.ammount} from your current balance.`);
                    console.log("---------------------------------------------------------");
                }
        }
    // Fast Cash feature:-----------------------------------------------------------------------------------
    else if(features.options === "Fast-Cash")
        {
            console.log();
            console.log("---------------------------------------------------------");
            let fast = await inquirer.prompt([
                {
                    message: "Please Select one of the ammount.",
                    type: "list",
                    name: "cash",
                    choices: [1000,5000,10000,20000,30000,50000],
                },
            ]);
            if(fast.cash > balc)
                {
                    console.log("-------------------------");
                    console.log(".         ERROR         .");
                    console.log(". Insufficient Ammount. .");
                    console.log("-------------------------");
                }
            else 
                {                
                    balc -= fast.cash;
                    wid = fast.cash;
                    console.log();
                    console.log(`Succesfully Withdrawn Rs ${fast.cash} from your current balance.`);
                    console.log("---------------------------------------------------------");
                };    
        }
    // Check Balance feature:-----------------------------------------------------------------------------------
    else if(features.options === "Check Balance")
        {
            console.log();
            console.log("===========================================================================");
            console.log("===  USER123  ================== WELCOME ================== ID:12341234 ===");
            console.log("===========================================================================");
            console.log(`                        Total Balance: Rs ${balc}                          `);
            console.log(`                        Last Withdraw: Rs ${wid}                           `);
            console.log("                        ========================                           ");
        }
    else if(features.options === "exit")
        {
            exe = "exited....";
            console.log(exe);
        };
}