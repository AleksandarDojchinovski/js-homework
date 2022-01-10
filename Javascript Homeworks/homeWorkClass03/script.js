//HOMEWORK PART 1

//Write a JavaScript function which accepts a parameter and returns its type and prints it in the console.
//Try to call the functions 5 times for 5 different types:
// object,boolean,number,string,undefined

function getType(check){
    console.log(`The type of : ${check} is ${typeof(check)}`);
    return typeof(check);
}

getType(new Object());
getType(6<3);
getType(25);
getType(`SEDC`);
getType();


//HOMEWORK PART 2

//Write a JavaScript function that will return:
//Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
//Note: Call the function in console to see the answer
//Bonus: Make the same function work for converting dog to human years aswell

function humanDog(){
    let input = prompt(`Select d to convert human to do dog years or select h to convert dog to human years`);
    if(input === null){
        alert(`Canceled`);
        return null;
    }
    if(input.toUpperCase() === `D`){
        let years = parseInt(prompt(`Enter your dog's human years:`));
        console.log(`Your dog is ${years * 7} years young!`);
        return years * 7;
     
    }
    else if(input.toUpperCase() ===`H`){
        let years = parseInt(prompt(`Enter your dog years:`));
        console.log(`Your dog is ${years / 7} years young!`);
        return years / 7 ;
    }
    else{
        alert(`Invalid input, Select d to convert human to do dog years or select h to convert dog to human years `)
        humanDog()
    }
}
yearsResult = humanDog();

//HOMEWORK PART 3

//Write a JavaScript function for an ATM:
//The ATM should give cash
//Should return "Not enough money" if you request more money
//Should return the ammount withdrawn and money left on the account if you have enough
//Note:Hardcode your account money in the program
//Bonus:Make it work with prompt()

let userBalance = 500;

function atm(){
    let getMoney = parseInt(prompt(`Please enter the ammount you want to withdraw`));
    while(isNaN(getMoney)){
        alert(`Invalid input! Enter the ammount you want to withdraw `);
        getMoney = parseInt(prompt(`Please enter the ammount you want to withdraw`));
    }
    if(getMoney<= userBalance){
        let test = `You withdraw ${getMoney} and your new balance is: ${userBalance - getMoney}`
        return test;
    }
    else{
        return `You cant withdraw ${getMoney} , you only have ${userBalance} balance.`
    } 
}

let atmResult = atm();

console.log(atmResult);