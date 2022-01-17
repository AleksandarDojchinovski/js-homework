// BONUS HOMEWORK
// Create a recipe page from inputs

// Ask the user for the name of the recipe
// Ask the user how many ingredients do we need for the recipe
// Ask the user for the name of every ingredient
// Print the name of the recipe in the HTML as heading element, ex: h1-h6
// Print all ingredients as an unordered list in the HTML
// Extra: Use a table if you want to be fancy :)


let recipeName = document.getElementById("recipeName");
let ingredients = document.getElementById("ingredients");
let btn = document.getElementById("clickRecipe");

btn.addEventListener("click",function(){

    document.getElementById("recipeInput").innerHTML += `<h1>${recipeName.value} recipe:</h1>`
    document.getElementById("recipeInput").innerHTML += `<h3>Ingredients required :${ingredients.value}</h3>`
    for(let i = 0; i < ingredients.value; i++){
        document.getElementById("recipeInput").innerHTML += `<input id ="ing${i}" placeholder = "Ingredient ${i+ 1}"/> <br/><br/>`   
    }
    console.log(ingArray);
    document.getElementById("recipeInput").innerHTML += `<button id = "submit">Confirm!</button>`
    let confirm = document.getElementById("submit");

    confirm.addEventListener("click",function(){
            document.getElementById(`addTable`).innerHTML += `<table style = "border: 1px solid black;"><tr id = "getIt" style ="border: 1px solid black;"><td style = "border: 1px solid black;">${recipeName.value}</td>`
        for(let i = 0; i < ingredients.value; i++){
            let ingredientValue = document.getElementById(`ing${i}`).value;
            document.getElementById(`addList`).innerHTML += `<li>${ingredientValue}</li>`
            document.getElementById(`getIt`).innerHTML += `<td style="border: 1px solid black;">${ingredientValue}</td>`
        }
        document.getElementById(`addTable`).innerHTML += `</tr></table>`
    })
})
