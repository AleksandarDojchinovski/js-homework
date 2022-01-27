// HOMEWORK PART 2
// Write a JavaScript program to display the reading 
// status of some book. The object should have the next properties:
//  title, author, readingStatus and a method that will
//   return info depending on the readingStatus e.g.

// Already read 'The Robots of dawn' by Isaac Asimov. (if true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games'
// by Suzanne Collins. (if false).
// BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML

let bookTitle = document.getElementById('title');
let bookAuthor = document.getElementById('author');

let yesBtn = document.getElementById('yesRead');
let noBtn = document.getElementById('noRead');

let infoBtn = document.getElementById('button');


function BookInfo(title,author,readingStatus){
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;
    this.info = function(){
        if(readingStatus)
    return (`Already read "${title}" by ${author}.`)
   
    else{
    return (`You still need to read "${title}" by ${author}.`)
}
    }
    
}
infoBtn.addEventListener('click',function(e){
let titleVal = bookTitle.value;
let authorVal = bookAuthor.value;
let infoVal = yesBtn.checked;

let book = new BookInfo(titleVal,authorVal,infoVal);
console.log(book.info());


})


