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