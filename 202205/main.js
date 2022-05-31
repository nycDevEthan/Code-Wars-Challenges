// Ethan O'Connell - 5/2/22
// 8 kyu - Square(n) Sum
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// Original solution
function squareSum(numbers){
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i] * numbers[i];
    }
    
    return total;
  }
  
  squareSum([1,2,2]);


// Solution using map.reduce.  
// Array method I read up on here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

function squareSum(numbers){
    return numbers.reduce((sum, n) => sum + (n * n), 0);
}

squareSum([1,2,2]);

// 8 kyu - Multiply
// This code does not execute properly. Try to figure out why.
// function multiply(a, b){
//   a * b
// }

// Solution - added return statement
function multiply(a, b){
    return a * b
}

// Ethan O'Connell - 5/3/22
// 8 kyu Abbreviate a Two Word Name
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// Solution
function abbrevName(name){
    let firstInitial, lastIntial;
    firstIntial = name[0];
    for (let i = 0; i < name.length; i++) {  
      if (name[i] === ' ') {
        lastIntial = name[i + 1];
      }
    }
    return `${firstIntial.toUpperCase()}.${lastIntial.toUpperCase()}`;
  }
  
  abbrevName('Sam Harris');
  abbrevName('patrick feeney');

// Ethan O'Connell - 5/4/22
// 8 kyu How good are you really?
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// Solution:
function betterThanAverage(classPoints, yourPoints) {
  
  let classAverage = classPoints.reduce((totalPoints, currentPoints) => totalPoints + currentPoints, 0) / classPoints.length;
  
  switch(true) {
      case (classAverage === yourPoints):
        console.log("My test score is the same as the class average");
        return true;
      case (classAverage < yourPoints):
        console.log("My test score is greater than the class average");
        return true;
      case (classAverage > yourPoints):
        console.log("My test score is less than the class average");
        return false;
    }
}

betterThanAverage([77,88,99,50], 100);

// Ethan O'Connell - 5/5/22
// 8 kyu A Needle in the Haystack
// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])

// Solution
function findNeedle(haystack) {
  const needleInHayStack = haystack.find(element => element === 'needle');
  
  return `found the ${needleInHayStack} at position ${haystack.indexOf('needle')}`;
}

// Ethan O'Connell - 5/6/22
// 8 kyu You only need one - Beginner
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

// Solution
function check(a, x) {
  return a.includes(x);
}

// Ethan O'Connell - 5/7/22
// 8 kyu Reversed Strings
// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// Solution
function solution(str){
  let strArr = str.split('');
  strArr = strArr.reverse();
  return strArr.join('');
}

// Ethan O'Connell - 5/8/22
// 8 kyu Convert a Number to a String!
// We need a function that can transform a number into a string.
// What ways of achieving this do you know?
// Examples:
// 123 --> "123"
// 999 --> "999"

// Solution
function numberToString(num) {
  return num.toString();
}

// Ethan O'Connell - 5/9/22
// 8 kyu You Can't Code Under Pressure #1
// Code as fast as you can! You need to double the integer and return it.

// Solution
function doubleInteger(i) {
  return i * 2;
}

// Ethan O'Connell - 5/10/22
// 8 kyu Function 1 - hello world

// Description:
// Make a simple function called greet that returns the most-famous "hello world!".

// Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of? What is a "hello world" solution you would want to show your friends?

// Solution
const greet = greeting => 'hello world!';

// Ethan O'Connell - 5/11/22
// 8 kyu L1: Set Alarm
// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

// Solution
function setAlarm(employed, vacation){
  return true ? employed === true && vacation === false : false;
}

// Ethan O'Connell - 5/12/22
// 8 kyu Sum of positive
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// Solution
function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Math.sign(arr[i]) === 1) {
      sum += arr[i];
    }
  }
  return sum;
}

// Ethan O'Connell - 5/13/22
// 8 kyu Count of positives / sum of negatives
// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  let posCount = 0;
  let negSum = 0;
  let posCountAndNegSum = [];
  
  if (input === null || input.length === 0) {
    return [];
  }

  for (let i = 0; i <= input.length - 1; i++) {
    if (Math.sign(input[i]) === 1) {
      posCount++;
    } else if (Math.sign(input[i]) === -1) {
      negSum += input[i];
    }
  }
  posCountAndNegSum.push(posCount);
  posCountAndNegSum.push(negSum);
  return posCountAndNegSum;
}

// Ethan O'Connell - 5/14/22
// 8 kyu Convert boolean values to strings 'Yes' or 'No'.
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
  if (bool === true) return "Yes";
  else return "No";
}

// Ethan O'Connell - 5/15/22
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}

// Ethan O'Connell - 5/16/22
// 8 kyu Convert a String to a Number!
// Note: This kata is inspired by Convert a Number to a String!. Try that one too.

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

const stringToNumber = function(str){
  return Number(str);
}

// Ethan O'Connell - 5/16/22
// 7 kyu Regex validate PIN code
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN (pin) {
  if (Number(pin) >= 0 && Number(pin) % 1 === 0 && (pin.length === 4 || pin.length === 6)) return true;
  else return false;
}

// Ethan O'Connell - 5/17/22
// 8 kyu
// Opposite number
// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
  if (Math.sign(number) === 1) return -Math.abs(number);
  else return Math.abs(number);
}

// Ethan O'Connell - 5/18/22
// 8 kyu
// Return Negative
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
  return (Math.sign(num) === 1) ? -num : num;
}

// Ethan O'Connell - 5/18/22
// 8 kyu
// Calculate average
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
  if (array.length === 0) {
    return 0;
  } else {
    let total = 0;
    array.forEach(element => total += element);
    return total / array.length;
  }
}

// Ethan O'Connell - 5/19/22
// 8 kyu
// Are You Playing Banjo?
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
  if ( name[0] === 'R' || name[0] === 'r' ) {
    return `${name} plays banjo`;
  } else {
    return `${name} does not play banjo`;
  }
}

// Ethan O'Connell - 5/20/22
// 8 kyu
// String repeat
// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
  return s.repeat(n);
}

// Ethan O'Connell - 5/26/22
// 8 kyu
// Remove String Spaces
// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
  return x.replace(/\s+/g, '');
}

// Ethan O'Connell - 5/28/22
// 8 kyu
// Remove First and Last Character
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
  return str.slice(1, -1);
};

// Ethan O'Connell - 5/29/22
// 8 kyu
// Find the smallest integer in the array
// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    args.sort((a,b) => a-b);
    return args[0];
  }
}

// Ethan O'Connell - 5/30/22
// 8 kyu
// Grasshopper - Summation
// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

var summation = function (num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

// Ethan O'Connell - 5/31/22
// 8 kyu
// Counting sheep...
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
  let numOfSheep = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      numOfSheep++;
    }
  }
  return numOfSheep;
}