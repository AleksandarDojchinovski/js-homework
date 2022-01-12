// HOMEWORK PART 1
// Change the page with JavaScript

// Change the text of all paragraphs and headers with javascript
// Note:The html must not be changed



document.getElementsByClassName("paragraph")[0].innerText="This is a changed paragraph text!"
document.getElementsByClassName("paragraph")[1].innerHTML="This is a changed paragraph text also!"

document.getElementById(`myTitle`).innerText="This is a cool page with changed header text!"
document.getElementsByTagName(`h1`)[1].innerText="This is the second changed header text!"
document.getElementsByTagName(`h3`)[0].innerText="This is a smaller header with changed text!"


// HOMEWORK PART 2
// Print all numbers from an array and the sum

// Create an array with numbers
// Print all numbers from the array in a list element, in a new HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)

let numbers = [2,4,6,8]
let sum = 0;
document.querySelector(`body`).innerHTML += `<ul>Total numbers :</ul>`

for (let i = 0; i < numbers.length; i++){
    document.querySelector(`ul`).innerHTML += `<li>${numbers[i]}</li>`
    sum=sum+numbers[i]
    
    }
document.querySelector(`ul`).innerHTML += `<li>The sum of ${numbers} is: ${sum}</li>`


// BONUS HOMEWORK
// Create a recipe page from inputs

// Ask the user for the name of the recipe
// Ask the user how many ingredients do we need for the recipe
// Ask the user for the name of every ingredient
// Print the name of the recipe in the HTML as heading element, ex: h1-h6
// Print all ingredients as an unordered list in the HTML
// Extra: Use a table if you want to be fancy :)


let recipeName = prompt(`Enter the name of your recipe.`);
let ingredients = parseInt(prompt(`How many ingredients do you need?`));
let niza = [];
document.querySelector(`table`).innerHTML += `<tr><th>${recipeName}<tr><th>`

for(let i = 0; i < ingredients; i++){
        document.querySelector(`ul`).innerHTML += `<table border= 1px><td>${niza[i] = prompt(`Enter ingredient`)}</td></table>`
}
console.log(niza);
