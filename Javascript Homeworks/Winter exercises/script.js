console.log(`----------Winter Exercises----------`);
console.log(`----------Functions----------`);


console.log('----------TASK 1----------');
// Task 1: Convert Minutes into Seconds
//Write a function that takes an integer minutes and converts it to seconds.

function minToSec(input){
    if(input === 1){
        console.log(`${input} minute is equal to ${input * 60} seconds.`);
        return input * 60
    }
    else if(isNaN(parseInt(input))){
        console.log(`You cant convert '${typeof(input)}' to seconds!`);
        return NaN
    }
    else{
        console.log(`${input} minutes are equal to ${input * 60} seconds.`);
        return input * 60
    }
    
    
}
let minToSecResult = minToSec(1);

console.log('----------TASK 2----------');
// Task 2: Return the Next Number from the Integer Passed
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function nextNumber(input){
    if(isNaN(parseInt(input))){
        console.log(`You cant increment '${typeof(input)}'`)
        return NaN;
    }
    else{
        return ++input;
    }
}
resultNextNumber = nextNumber(2);
console.log(`Your result is ${resultNextNumber}!`);

console.log('----------TASK 3----------');
// Task 3: Convert Hours into Seconds
// Write a function that converts hours into seconds.

function hoursToSec(input){
    if(isNaN(parseInt(input))){
        console.log(`You cant convert '${typeof(input)}' to seconds!`);
        return NaN;
    }
    else if(input === 1) {
        console.log(`${input} hour equals ${input* 60 * 60} seconds.`);
        return input * 60 * 60;
    }
    else{
        console.log(`${input} hours are equal to ${input * 60 * 60} seconds.`);
        return input * 60 * 60;
    }
}

resultHoursToSec = hoursToSec(3)


console.log('----------TASK 4----------');
// Task 4: Return the Remainder from Two Numbers
// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. 
// The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

function remainder(num1,num2){
    if(isNaN(parseInt(num1))){
        console.log(`You cant calculate remainder from ${typeof(num1)}`);
        return NaN;
    }
    else if(isNaN(parseInt(num2))){
        console.log(`You cant calculate remainder from ${typeof(num2)}`);
        return NaN;
    }
    else{
    let remainder= num1 % num2;
    return remainder;
    }
}
let resultRemainder = remainder(120,14);
console.log(`The remainder is ${resultRemainder}`);


console.log('----------TASK 5----------');
// Task 5: The Farm Problem
// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

function farm(chickens,cows,pigs){
    let subTotal= (chickens *2) + (cows *4) + (pigs *4);
    console.log(`Number of chicken legs is ${chickens *2}\nNumber of cow's legs is ${cows * 4}\nNumber of pig's legs is ${pigs *4}`);

    return subTotal;
}
let resultFarm = farm(3,4,4);
console.log(`Total number of animal legs is ${resultFarm}`);
console.log('----------TASK 6----------');

// Task 6: Compare Strings by Count of Characters
// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of 
// characters in the first string is equal to the total number of characters in the second string.

function count(count1,count2){
    
    if(count1.length === count2.length){
        console.log(`The length of ${count1} is equal to ${count2} length`);
        return true;
    }
    else{
        console.log(`The length of ${count1} is ${count1.length} and the length of ${count2} is ${count2.length}`);
        return false;
    }
}
let resultLenght=
count("Aleksa","Martin");
console.log(`The result is ${resultLenght}`);

// Task 7: Is the Word Singular or Plural?
// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s"

console.log('----------TASK 7----------');

function plural(word) {
    if (word.slice(-1) === "s") {
        console.log(`${word} is a plural word`);
    }
    else {
        console.log(`${word} is not a plural word`);
    }
}

     plural("Seavus")

    // Task 8: Case Insensitive Comparison
// Write a function that validates whether two strings are identical. Make it case insensitive.

console.log(`----------TASK 8 ----------`);

function insensitive(example1,example2){
    if(example1.toUpperCase()===example2.toUpperCase()){
         console.log(`${example1} is same as ${example2}`)
    }
    else{
        console.log(`${example1} is diferent word than ${example2}`);   
    }
}

insensitive('aleksandar','Aleksandar');

console.log('----------TASK 9 ----------');

// Task 9: Convert Number to Corresponding Month Name
// Create a function that takes a number and returns its corresponding month name as a string. For example, if you're given 3 as input, 
// your function should return "March", because March is the 3rd month.
let months = ['January','February','March','April','May','June','July','August','September','Octomber','November','December'];
function getMonth(input){
    
    if(input >= 1 && input <=12){
    return months[--input];
       }
       else{
           console.log('Invalid input');
           return null;
       }
    }
    
resultMonth = getMonth(12)
console.log(resultMonth);

// Task 10: Write a functions that accepts one parameter and checks if the parameter is a Truthy or Falsy?

console.log('----------TASK 10 ----------');

function check(one){

    if (one){
        return "Truthy"
    }
    else{
        return "Falsy"
    }
}

let resultTruthyFalsy = check('Aleksandar')
console.log(resultTruthyFalsy);
resultTruthyFalsy = check(undefined)
console.log(resultTruthyFalsy);
    
    //** Arrays
    
    
    console.log(`----------ARRAYS----------`);
    console.log(`----------TASK 0----------`);
    
    // Task 0: Create an array
    // Create a function that takes an number and creates array with all numbers till that number.

    function arrayNumber(num){
        let arr=[]
        for(let i= 0; i<=num; i++){
            arr[i]=i
        }
        console.log(`This array starts from ${arr[0]} and displays all numbers to ${num} : ${arr}`);
        return arr
    }
    resultArrayNumber = arrayNumber(10);

    
    console.log('----------TASK 1----------');


    // Task 1: Return the First Element in an Array
    // Create a function that takes an array and returns the first element.
    
    let mixedArray=[`Aleksandar`, 5 ,'Martin', 10];
    
    function returnElement(array){
        
        return array[0];
    }
    
    let resultFirstElement = returnElement(mixedArray);
    
    console.log(`The first element of the array is '${resultFirstElement}'`);
    
console.log(`----------TASK 2----------`);

    // Task 2: Reverse an Array
    // Write a function to reverse an array.
    
    
    function reverse(array){
        return array.reverse()
    }
    
    let resultReverse = reverse(mixedArray);
    
    console.log(`This is a reversed array: '${resultReverse}'`);
    
    
    // Task 3: Find the Index
    // Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.
    
    console.log(`----------TASK 3----------`);

    let searchIndex= [10,20,4,3,2,30,40,50,60];
    
    function findIndex(array,input){
       
        if(array.indexOf(input) === -1){
            console.log(`There is not '${input}' in '${array}' !`);
            return array.indexOf(input);
        }
        else {
            console.log(`The index of ${input} in '${array}' is ${array.indexOf(input)}`);
            return array.indexOf(input);
        }
    }
       let returnedIndex = findIndex(searchIndex,200);
    
    console.log(returnedIndex);

    console.log(`----------TASK 4----------`);
    
    // Task 4: Check if an Array Contains a Given Number
    // Write a function to check if an array contains a particular number.
    
    
    function findNumber(array,input){
    if(array.includes(input)){
        console.log(`There is ${input} in "${array}"`);
    }
    else{
        console.log(`There is not ${input} in "${array}" `);
    }
    }
    
    findNumber(searchIndex,4);
    

console.log(`----------TASK 5----------`);

    // Task 5: Negate the Array of Numbers
    // Given an array of numbers, negate all elements contained within.
    
    function negateNumber(array){
        for(let i = 0; i < array.length; i++){
            array[i]= array[i] * -1;
            //console.log(`The negative number of ${array[i]} is ${array[i] * -1}`);
            console.log(`${array[i]}`);
        }
    }
    negateNumber(searchIndex);
    
    console.log(`----------TASK 6----------`);
    
    // Task 6: Difference of Max and Min Numbers in Array
    // Create a function that takes an array and returns the difference between the biggest and smallest numbers.
    function findMin(input){
        let min= Infinity;
        for(let i= 0; i < input.length; i++){
            if(input[i]<min){
                min=input[i]
            }
        }
        return min;
    }
    let min=
    findMin(searchIndex);
    
    function findMax(input){
        let max = -Infinity;
        for(let i = 0; i < input.length; i++){
            if(input[i]> max){
                max = input[i]
            }
        }
        return max;
    }
    let max = 
    findMax(searchIndex);
    
    console.log(`The biggest number from "${searchIndex}" is ${max} and the smallest is ${min}, the difference between them is ${max - min}`);

    console.log(`----------TASK 7----------`);

    // Task 7: Multiply by Length
    // Create a function to multiply all values in an array by the amount of values in that array.
    function multyplyArray(array){
        for(let i = 0; i < array.length; i++){
            console.log(`${array[i]} * ${array.length}: ${array[i] * array.length}`);
        }
    }
    multyplyArray(searchIndex);

    console.log(`----------TASK 8----------`);

    // Task 8: Hurdle Jump
    // Create a function that takes an array of hurdle heights and a jumper's jump height, and determine whether or not the hurdler can clear all the hurdles.
    // A hurdler can clear a hurdle if their jump height is greater than or equal to the hurdle height.
        let hurdleHeights= [100,200,300,400,500,600,700,800,900,1000]
        function hurdle(heights,jumper){
        for(let i = 0; i<heights.length; i++){
            if(jumper>heights[i]){
                console.log(`Success!!`);
                console.log(`You jump ${jumper-heights[i]} cm more than required!`)
            }
            else if(jumper===heights[i]){
                console.log(`Success!!`);
                console.log(`You jump exacly the same as required!! ${jumper} cm!`);
            }
            else{
                console.log(`You need to work on your jump!`)
                console.log(`You miss ${heights[i] - jumper} more cm!`)
            }
        }
    }
    hurdle(hurdleHeights,400);

    console.log(`----------TASK 9----------`);

    // Task 9: Generate a Countdown of Numbers in an Array
    // Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.
    function countDown(num){
        let arr=[]
        for(let i= 0; i<=num; i++){
            arr[i]=i
        }
        console.log(`"${arr.reverse()}" HAPPY NEW YEAR!!!`);
        return arr;
    }
    let resultCountDown = countDown(10);

    console.log(`----------TASK 10----------`);

    // Task 10: Odd Up, Even Down
    // Create a function that goes through the array, incrementing (+1) for each odd number and decrementing (-1) for each even number.
    
    let evenOdd = [1,2,3,4,5,6,7,8,9,10]
    
    function oddEven(array){
        for(let i = 0; i < array.length; i++){
            if(array[i] % 2){
            array[i]++
            }
            else {
                array[i]--
            }
        }
        return array
    }
    
    let resultEvenOdd =
    oddEven(evenOdd);
    
    console.log(`"${resultEvenOdd}"`);