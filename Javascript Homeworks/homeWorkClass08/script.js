// HOMEWORK PART 1
// CREATE A GREETING APP WITH JQUERY
// Create an input
// Create a button
// When clicked the button should print a
//  greet message in an h1 header
// Ex: input: Petko output message: Hello there Petko!

// You must use JQuery to complete the task

$(document).ready(function(){

$('#sayHi').click(function(e){
    $('#sayHi').after(`<h1>Hello there ${$('#input').val()}`)
$('#input').val("")
})

// HOMEWORK PART 2
// Create a header generator

// Create two inputs, one for text and one for color
// Create a button that says: generate h1
// Create an h3 element for messages
// When the button is clicked create a new header below the inputs and button
// The new header should have the text and color from the inputs
// If the person enters an invalid color or an empty text show an error message to the message element
//  You must use JQuery to complete the task

let inputText = $('#textInput');
let inputColor = $('#color');
let txtBtn = $('#generateH1');
let result = $('#showGenerate');


function isColor(strColor){
    let s = new Option().style;
    s.color = strColor;
    return s.color == strColor.toLowerCase();
  }

txtBtn.click(function(e){
    if(inputText.val() == ""){
       return alert('Enter text!')
    }
      if(isColor(inputColor.val())){
    result.html(`${inputText.val()}`).css('color',`${inputColor.val()}`)
      }
      else{
          alert(`Invalid input!`);
      }

      
})


  






})
