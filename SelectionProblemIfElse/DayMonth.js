const prompt = require('prompt-sync')();
const day = prompt('Enter the day: ');
console.log(`Hey there ${day}`);
const month = prompt('Enter the month: ');
console.log(`Hey there ${month}`);

if (( (day <= 20 && month <= 6) && (month >= 3 && day <= 20 ) && (day < 31 )))
console.log("True")
else
console.log("False")