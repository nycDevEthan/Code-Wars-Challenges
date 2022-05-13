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