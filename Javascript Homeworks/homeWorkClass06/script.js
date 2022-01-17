// HOMEWORK PART 1
// Change the page with JavaScript

// Change the text of all paragraphs and headers with javascript
// Note:The html must not be changed


let firstPar = document.querySelector(`p`);
firstPar.innerText = "This is a changed text paragraph with function inner Text in javascript";

let secondPar = document.getElementsByClassName("anotherDiv")[0].firstElementChild;
secondPar.innerText ="This is also a changed text paragraph with function inner Text in javascript"

document.querySelector(`text`).innerText += " text!"

let headerOne = document.querySelector(`div`).firstElementChild;
headerOne.innerText = "This is changed header one!"

let lastDiv = document.getElementsByClassName(`anotherDiv`)[0].nextElementSibling;

let headerTwo = lastDiv.firstElementChild;

headerTwo.innerText = "This is changed header also"

let smallHeader = headerTwo.nextElementSibling;

smallHeader.innerText = "This is small header changed text"



// document.getElementsByClassName("paragraph")[0].innerText="This is a changed paragraph text!"
// document.getElementsByClassName("paragraph")[1].innerHTML="This is a changed paragraph text also!"

// document.getElementById(`myTitle`).innerText="This is a cool page with changed header text!"
// document.getElementsByTagName(`h1`)[1].innerText="This is the second changed header text!"
// document.getElementsByTagName(`h3`)[0].innerText="This is a smaller header with changed text!"
