let twoDigitNo, count = 0, sum = 0;
while(count < 5)
{
    twoDigitNo = Math.floor(Math.random() * 90) + 10;
    console.log("Two digit Number: " + twoDigitNo);
    sum +=twoDigitNo;
    count++;
}
console.log("Sum of 5 two digit numbers is:"+ sum);
console.log("Average of 5 two digit number is: "+ sum/count);