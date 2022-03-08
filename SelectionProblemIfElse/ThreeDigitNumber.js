let min = 999;
let max = 100;
for ( var i = 1; i <= 5; i++) {
    let randomNumber= Math.floor(Math.random() * 900) + 100;
    console.log("Random number is: " + randomNumber);

    let number = randomNumber
        if (number > max){
            max = number;
        }
        if (number < min){
            min = number;
        }
}
console.log("Min number: " + min);
console.log("Max number: " + max);