import inquirer from "inquirer";
console.log("------------------------------");
console.log(".          ATM CARD          .");
console.log("------------------------------");
console.log(".                            .");
console.log(". ID: 12341234     PIN:99090 .");
console.log(".                            .");
console.log(".    1143 2356 8892 5666     .");
console.log("------------------------------");
console.log("================================================");
console.log(".                                              .");
console.log(". Welcome To The International Bank Of Nothing .");
console.log(".                                              .");
console.log("================================================");
console.log("");
console.log("==============================");
console.log("Please Enter Your Credentials.");
console.log("==============================");
let user1_id = 12341234;
let user1_pin = 99090;
do {
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
    if (login.user_id === user1_id) {
        if (login.user_pin === user1_pin) {
            console.log("=====================");
            console.log("Login was successfull");
            console.log("=====================");
        }
        else {
            console.log("========================================");
            console.log("Sorry! The PIN you entered is incorrect.");
            console.log("========================================");
        }
    }
    else {
        if (login.user_pin === user1_pin) {
            console.log("======================================");
            console.log("Sorry! No user with such ID was found.");
            console.log("======================================");
        }
        else {
            console.log("=================================");
            console.log("You entered the wrong credentials");
            console.log("=================================");
        }
    }
    ;
} while (login.user_id != 12341234 || login.user_pin != 99090);
do {
    var depo = Math.floor(Math.random() * 10000 + 1);
} while (depo <= 1000);
do {
    var wid = Math.floor(Math.random() * 999);
} while (wid <= 100);
let balc = depo - wid;
console.log("Please wait ......");
console.log();
console.log("===========================================================================");
console.log("===  USER123  ================== WELCOME ================== ID:12341234 ===");
console.log("===========================================================================");
console.log("== ---------------------- Total Balance: Rs " + balc + " ----------------------- ==");
console.log("== Last Deposited: Rs " + depo + " --------------------- Last Withdrawal: Rs " + wid + " ==");
console.log("===========================================================================");
// Information block
