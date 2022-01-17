let myButton = document.getElementById("myBtn");

function greet (){
    alert(`Hello Bob!`);
}

myButton.onclick = greet;

let paragraph = document.getElementById("myParagraph");
let myBtn = document.getElementById("btn");

function changeElement(element){
    element.style.color = "red";
    element.style.backgroundColor = "blue";
    element.style.fontSize = "34px";
}

myBtn.addEventListener("click", function(){
    changeElement(paragraph);
})



// Create an HTML page, with 4 inputs for FirstName, LastName ,Email and Password and a button
// On click of the button call a function that will get all the inputs' values and use the values
// as parameters for a new function which will add them to string
// Finaly print the string in a new p element on the screen

let fName = document.getElementById("name");
let lName = document.getElementById("lName");
let email = document.getElementById("email");
let pass = document.getElementById("pass");

let subBtn = document.getElementById("sub");

function showUser(name,lname,email,pass){
    let passHide = ""
    for(let i = 0; i < pass.length; i++){
        passHide += "*"
    }
    document.getElementById("userId").innerText +=`Name: ${name}, Last name: ${lname}, Email: ${email}, Password: ${passHide}`
}

subBtn.addEventListener("click",function(){
    let nameVal = fName.value;
    let lNameVal = lName.value;
    let emailVal = email.value;
    let passVal = pass.value;

showUser(nameVal,lNameVal,emailVal,passVal)
    
})