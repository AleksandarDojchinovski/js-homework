//HOMEWORK #1

// Create a function called tellStory()
// The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )
// The function should return one big string with a story made from the arguments
// Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.
// The value that is returned from the function should be printed in the console or in alert
console.log('---------- HOMEWORK #1 ----------');
let story= ['Aleksandar','lazy','sleeping'];

function tellStory(array){
    return `This is ${array[0]}.\n${array[0]} is a nice person. Today he is very ${array[1]} and he is ${array[2]} all day.`
}
let storyResult = tellStory(story);
console.log(storyResult);

//HOMEWORK #2

// Write a function that will take an array of 5 numbers as an argument and return the sum.
// Print it in the console or in alert
console.log('---------- HOMEWORK #2 -----------');
let fiveNumbers=[5,7,3,2,9];

function numbers(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum = sum + array[i];
    }
    return sum;
}
let sumOfFiveNumbers = numbers(fiveNumbers);
console.log(`The sum of ${fiveNumbers} is ${sumOfFiveNumbers}`);

// BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result.
 console.log('---------- HOMEWORK #2 BONUS ----------');
function validateNumber(){
    let validateNumber=[2,`Aleksandar`,6,8,10];
    let counter = 0;
    while (counter<validateNumber.length){
        if(isNaN(validateNumber[counter])){
            console.error(`${validateNumber[counter]} is not a number!`);
        }
        else{
            console.log(`${validateNumber[counter]} is number`);
        }
        counter++
    }
}
validateNumber();

console.log('----------HOMEWORK #1.1----------');
// HOMEWORK #1
// Write a javascript function that:
// When given any array of strings (should work with array with any number of elements)
// It will create one big string and return it
// Ex:["Hello", "there", "students", "of", "SEDC", "!"]
// Result: "Hello there students of SEDC!"


function bigString(string){
    return string.join(" ")
}
let test=["Hello","there","students","of","SEDC!"];

testResult = bigString(test);

console.log(`"${testResult}"`);

console.log('----------HOMEWORK #2.1----------');
// HOMEWORK #2
// Title: Looping structures
// Description: Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, and will add the "\n" new line after every even number otherwise it will add " " empty space.

function loopOneToTwenty(add){
    for(let i = 1; i <= add; i++){
        if(i % 2 ==0){
            console.log(`${i} \n`)
            console.log(`\n`)
        }
        else{
            console.log(`${i} " "`)
        }
    }
}   
loopOneToTwenty(10)

console.log('----------HOMEWORK #3.1----------');

// HOMEWORK #3

// Title: Looping structures
// Description: Write a JavaScript function that will return:
// The sum of the MAX and MIN numbers from an array with numbers
// Ex: arr = [3, 5, 6, 8, 11]
// Output: Max: 11, Min: 3, Sum: 14
// Bonus: Try making the function work if there are other types of items in it

let mixedArray = [25,13,7,49,3,null, 5, 6,'', 8, 11,'Mile']
function sumMinMax(array){
    let min = Infinity;
    let max = -Infinity;
    for(let i = 0; i < array.length; i++){
        // if(array[i] === null || typeof(array[i]) === "string"){
        //     console.log(`${array[i]} is not a number`);
        // }
        if(isNaN(parseInt(array[i]))){
            console.log(`${array[i]} is not a number`);
        }
        else {
            if(min > array[i]){
                min = array[i]
            }
            if(max < array[i]){
                max = array[i]
            }
        }
    }
    console.log(`${min} min`);
    console.log(`${max} max`);
    return min + max;
}
let sumOfMinMax = sumMinMax(mixedArray)
console.log(`The sum from min and max is ${sumOfMinMax}`);

console.log('----------HOMEWORK #4.1----------')


// HOMEWORK #4

// Title: Looping structures
// Description:Write a javascript function that:
// When given 2 arrays of students firstNames and lastNames will return a new array with students full names
// Every name should have a numeric value before it
// Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
// Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]

let fullName=["Petko","Stefan","Marko","Martin"];
let lastName=["Petkovski","Stefanovski","Markovski","Martinovski"];

function getFull(name,lastName){
let firstLast= []    
for(let i = 0; i<name.length; i++ ){
     firstLast.push(`${i+1}. ${name[i]} ${lastName[i]}`);
}
return firstLast;
}
let firstAndLastName = getFull(fullName,lastName);
console.log(firstAndLastName);


// E-mail:

// traniner@mail.com

// assistant@mail.com