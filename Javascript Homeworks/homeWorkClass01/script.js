var phones = 30;
var eachPrice = 119.95;
// var tax = (phones * price)/100 * 5;
var taxPercent = 5;
var taxPhones = (phones * eachPrice) / 100 * taxPercent;
var taxEachPrice = eachPrice / 100 * taxPercent;

console.log("-----Homework-----");
console.log("Calculator for phone tax");
// console.log(`The price for one phone is $${price}, and the tax is 5%`);
// console.log(`The tax for one phone would be $${price / 100 * 5} `);
// console.log(`The price for ${phones} phones without tax would be $${phones * price}`);
// console.log(`The tax for ${phones} phones would be $${tax}`);
// console.log(`Total price of ${phones} phones with 5% tax would be $${(phones * price) + tax}`)
console.log(`We have ${phones} phones`);
console.log(`The tax for one phone is ${taxPercent}%`);
console.log(`The price for one phone without tax is $${eachPrice}`);
console.log(`The price for ${phones} phones witout tax is $${phones * eachPrice }`)
console.log(`The tax price for one phone is $${taxEachPrice}`);
console.log(`The tax price for ${phones} phones is $${taxPhones} `)
console.log(`The price for one phone with ${taxPercent}% tax is $${eachPrice + taxEachPrice}`)
console.log(`The price for ${phones} phones with ${taxPercent}% tax is $${(phones * eachPrice) + taxPhones}`)