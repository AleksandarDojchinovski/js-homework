// HOMEWORK PART 1
// CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
// name
// kind
// speak (method)
// this method will take one parameter and will print in the console
//  a message: e.g. dog.speak(“hey bro!!!”) will log in the 
//console “Dog says: ‘Hey bro!!!’”

// Bonus: enter the values from prompt or from HTML inputs


let dogName = document.getElementById('name');
let dogKind = document.getElementById('kind');
let btn = document.getElementById('create');
let showDog = document.getElementById('showDog');
let dogSays = document.getElementById('speak');
let dogArr = []
function Animal(name,kind){
    this.name = name;
    this.kind = kind;
    this.speak = function(dog){
        return (`Your ${kind} ${name} says ${dog}`)
    }
}

btn.addEventListener('click',function(){
    let dog = new Animal(dogName.value,dogKind.value)
    console.log(dog.speak(dogSays.value));
    dogArr.push(dog)
    console.log(dogArr);
})



