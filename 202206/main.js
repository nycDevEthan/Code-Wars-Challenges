// Ethan O'Connell - 6/01/22
// 8 kyu
// Convert number to reversed array of digits
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

// tried a few different ideas - had trouble implementing working solution.
// did some research and found an efficient solution to study
// https://stackoverflow.com/questions/67594802/javascript-foreach-an-array-and-split-them-with-commas-and-last-ones-comma-with

function digitize(n) {
    return n.toString().split('').reverse().map(Number);
}

// Ethan O'Connell - 6/07/22
// 8 kyu
// Function 3 - multiplying two numbers
// Implement a function which multiplies two numbers.

// Write here your multiply-function
function multiply(n1, n2) {
    return n1 * n2;
}

// Ethan O'Connell - 6/8/22
// 8 kyu
// Third Angle of a Triangle
// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle

function otherAngle(a, b) {
    return (180 - (a + b));
  }

// Ethan O'Connell - 6/9/22
// 8 kyu
// Is n divisible by x and y?
// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

function isDivisible(n, x, y) {
    if (n % x == 0 && n % y == 0) {
      return true;
    } else {
      return false;
    }
  }

// Ethan O'Connell - 6/10/22
// 8 kyu
// Basic Mathematical Operations
// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2)
{
  if (operation === '+') {
    return value1 + value2;
  } else if (operation === '-') {
    return value1 - value2;
  } else if (operation === '*') {
    return value1 * value2;
  } else if (operation === '/') {
    return value1 / value2;
  } else {
    console.log('Not an operation');
  }
}

// Ethan O'Connell - 6/11/22
// 8 kyu
// Find Maximum and Minimum Values of a List
// Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Notes
// You may consider that there will not be any empty arrays/vectors.

var min = function(list){
  list.sort((a, b) => a - b);
  return list[0];
}

var max = function(list){
  list.sort((a, b) => a - b);
  return list[list.length - 1];
}

// Ethan O'Connell - 6/12/22
// 8 kyu
// Parse nice int from char problem
// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

function getAge(inputString){
  return Number(inputString.charAt(0));
}

// Ethan O'Connell - 6/13/22
// 8 kyu
// Grasshopper - Grade book
// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade (s1, s2, s3) {
  let avgScore = (s1 + s2 + s3) / 3;
  
  if (avgScore >= 90 && avgScore <= 100) {
    return 'A';
  } else if (avgScore >= 80 && avgScore < 90) {
    return 'B';
  } else if (avgScore >= 70 && avgScore < 80) {
    return 'C';
  } else if (avgScore >= 60 && avgScore < 70) {
    return 'D';
  } else {
    return 'F';
  }
}

// Ethan O'Connell - 6/14/22
// 8 kyu
// Calculate BMI
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
  let bmi = weight / (height * height);
  if (bmi <= 18.5) return "Underweight"
  else if (bmi <= 25.0) return "Normal"
  else if (bmi <= 30.0) return "Overweight"
  else return "Obese";
}

// Ethan O'Connell - 6/15/22
// 8 kyu
// Sum without highest and lowest number
// DESCRIPTION:
// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array) {
  let sum = 0;
  if (array === null || array === undefined || array === {}) {
    return 0;
  } else {
    array.sort((a,b) => a - b);
    for (let i = 1; i < array.length - 1; i++) {
      sum += array[i];
    }
    return sum;
  }
}

// Ethan O'Connell - 6/16/22
// 8 kyu
// The Feast of Many Beasts
// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
  if (beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length - 1) === dish.charAt(dish.length - 1)) {
      return true;
      } else {
      return false;
    }
}

// Ethan O'Connell - 6/17/22
// 8 kyu
// Opposites Attract
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
  return true ? flower1 % 2 === 0 && flower2 % 2 !== 0 || flower1 % 2 !== 0 && flower2 % 2 === 0 : false;
}

// Ethan O'Connell - 6/18/22
// 8 kyu
// Keep Hydrated!
// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

function litres(time) {
  return Math.floor(time * 0.5);
}

// Ethan O'Connell - 6/19/22
// 8 kyu
// Is it a palindrome?
// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  x = x.toLowerCase()
  return x === x.split('').reverse().join('');
  
}

// Ethan O'Connell - 6/20/22
// 8 kyu
// Returning Strings
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

function greet(name){
  return `Hello, ${name} how are you doing today?`;
}

// Ethan O'Connell - 6/20/22
// 8 kyu
// Century From Year
// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year) {
  return year % 100 === 0 ? Math.floor(year / 100) : Math.floor(year / 100) + 1;
}

// Using arrow function, learned about Math.ceil()
const century = year => Math.ceil(year / 100);

// Ethan O'Connell - 6/21/22
// 8 kyu
// Sum Mixed Array
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
  const arrOfNums = x.map(arrVal => Number(arrVal));
  const sum = arrOfNums.reduce((prevVal, currVal) => prevVal + currVal, 0);
  return sum;
}

// JS CW, array.() and array.reduce() practice.  Top solution - learned how to refactor function body into one return statement and how to use unary plus operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus.

function sumMix(x){
  return x.map(a => +a).reduce((a, b) => a + b);
}

// Ethan O'Connell - 6/22/22
// 8 kyu
// Convert a Boolean to a String
// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

function booleanToString(b){
  return String(b);
}

// alternative would be to use toString()

function booleanToString(b) {
  return b.toString();
}

// Ethan O'Connell - 6/23/22
// 8 kyu
// Beginner - Lost Without a Map
// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

function maps(x){
  return x.map(y => y * 2);
}

// Ethan O'Connell - 6/24/22
// 8 kyu
// Beginner Series #2 Clock
// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

function past(h, m, s){
  //#Happy Coding! ^_^

  // error handling
  if ((h < 0 || h > 23) || (m < 0 || m > 59) || (s < 0 || s > 59)) {
    console.log(`Please enter valid times - h (0-23), m (0-59), s (0-59)`);
    return false;
  }  

  const millisecond = 1000;
  // convert h to ms - 1 h = 3,600,000,000 ms
  const hoursToMilliseconds = (h * (millisecond * Math.pow(60, 2)));
  // convert m to ms - 1 m = 60000 ms
  const minutesToMilliseconds = (m * (millisecond * 60));
  // convert s to ms - 1 s = 1000 ms
  const secondsToMilliseconds = (s * millisecond);
  // sum conversions
  const sum = (secondsToMilliseconds + minutesToMilliseconds + hoursToMilliseconds);
  
  return sum;
}