const prompt = require('prompt-sync')();
const year = prompt('Enter the year: ');
console.log(`Hey there ${year}`);

if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0)
console.log(year + "," + "Is a Leap Year.");
else
console.log(year + "," + "Is not a Leap Year.");