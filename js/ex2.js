 /* HW-5
Example 2 JavaScript code
*/
const numbers = [...Array(10).keys()].map(x => x + 1); //create an array containing numbers 1 through 10

//a. An array of odd numbers
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Odd Numbers:", oddNumbers);

//b. An array of numbers divisible by 2 or 5
const divisibleBy2Or5 = numbers.filter(num => num % 2 === 0 || num % 5 === 0);
console.log("Divisible by 2 or 5:", divisibleBy2Or5);

//c. An array of numbers divisible by 3 squared
const divisibleBy3Squared = numbers.filter(num => num % (3 * 3) === 0);
console.log("Divisible by 3 squared:", divisibleBy3Squared);

//d. The sum of the following: square the numbers divisible by 5
const sumOfSquaredDivisibleBy5 = numbers
  .filter(num => num % 5 === 0)
  .map(num => num ** 2)
  .reduce((acc, current) => acc + current, 0);
console.log("Sum of squares of numbers divisible by 5:", sumOfSquaredDivisibleBy5);
console.log("Kanchi's Output from HW-5 Example 2")