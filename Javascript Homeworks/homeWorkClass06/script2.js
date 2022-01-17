// HOMEWORK PART 2
// Print all numbers from an array and the sum

// Create an array with numbers
// Print all numbers from the array in a list element, in a new HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)


let  arrayNum = [2,3,4,6,7,1,2,3,5,1,2];
let sum = 0;
let math = "";
for(let i = 0; i < arrayNum.length; i++){
    
    document.querySelector(`ul`).innerHTML += `<li>Num ${i+1}: ${arrayNum[i]}</li>`;
    sum = sum + arrayNum[i];
    math = `${math} ${arrayNum[i]} +`;
}
document.querySelector(`ul`).innerHTML += `<li>Sum of the ${arrayNum.length} numbers is : ${sum}</li>`;
document.querySelector(`ul`).innerHTML += `<li>${math.slice(0,-1)} = ${sum}</li></ul>`;