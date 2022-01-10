console.log(`-----Chinese zodiac-----`);

console.log(`--Please enter the year you are born--`);

let input = parseInt(prompt(`If/Else solution: Please enter the year you are born to determine your chinese zodiac sign`));
function calculateSign(input){
return ((input-4)%12);
}
let signFormula = calculateSign(input);
    
if ( signFormula==0){
    console.log(`Your chinese zodiac sign is Rat`);
}
else if ( signFormula==1){
    console.log(`Your chinese zodiac sign is Ox`);
}
else if ( signFormula==2){
    console.log(`Your chinese zodiac sign is Tiger`);
}
else if ( signFormula==3){
    console.log(`Your chinese zodiac sign is Rabbit`);
}
else if ( signFormula==4){
    console.log(`Your chinese zodiac sign is Dragon`);
}
else if ( signFormula==5){
    console.log(`Your chinese zodiac sign is Snake`);
}
else if ( signFormula==6){
    console.log(`Your chinese zodiac sign is Horse`);
}
else if ( signFormula==7){
    console.log(`Your chinese zodiac sign is Goat`);
}
else if ( signFormula==8){
    console.log(`Your chinese zodiac sign is Monkey`);
}
else if ( signFormula==9){
    console.log(`Your chinese zodiac sign is Rooster`);
}
else if ( signFormula==10){
    console.log(`Your chinese zodiac sign is Dog`);
}
else if ( signFormula==11){
    console.log(`Your chinese zodiac sign is Pig`);
}
else
{
    console.log(`Invalid input! ( Must be a year )`);
}

input = parseInt(prompt(`Switch solution: Please enter the year you are born to determine your chinese zodiac sign`));
signFormula = calculateSign(input);
switch(signFormula){
    case 0: 
        console.log(`Your chinese zodiac sign is Rat`);
    break;
    case 1:
        console.log(`Your chinese zodiac sign is Ox`);
    break;
    case 2:
        console.log(`Your chinese zodiac sign is Tiger`);
    break;
    case 3:
        console.log(`Your chinese zodiac sign is Rabbit`);
    break;
    case 4:
        console.log(`Your chinese zodiac sign is Dragon`);
    break;
    case 5:
        console.log(`Your chinese zodiac sign is Snake`);
    break;
    case 6:
        console.log(`Your chinese zodiac sign is Horse`);
    break;
    case 7:
        console.log(`Your chinese zodiac sign is Goat`);
    break;
    case 8:
        console.log(`Your chinese zodiac sign is Monkey`);
    break;
    case 9:
        console.log(`Your chinese zodiac sign is Rooster`);
    break;
    case 10:
        console.log(`Your chinese zodiac sign is Dog`);
    break;
    case 11:
        console.log(`Your chinese zodiac sign is Pig`);
    break;
    default:
        console.log(`Invalid input! ( Must be a year )`);
        break;  
}

input = parseInt(prompt(`Array solution: Please enter the year you are born to determine your chinese zodiac sign`));
signFormula = calculateSign(input);
let zodiacSigns=["Rat","Ox","Tiger","Rabbit","Dragon","Snake","Horse","Goat","Monkey","Rooster","Dog","Pig"]

if(isNaN(signFormula)){
console.log(`You must enter numbers!`);}
else{
console.log(`Your chinese zodiac sign is ${zodiacSigns[signFormula]}`);
}  
