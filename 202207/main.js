// Ethan O'Connell - 7/1/22
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

// Sum Numbers
function sum (numbers) {
    "use strict";
    return numbers.length === 0 ? 0 : numbers.reduce((previousValue, currentValue) => previousValue + currentValue);
};

let sum = (numbers) => numbers.reduce((a, b) => a + b, 0);

let sum = numbers => numbers.reduce((a, b) => a + b, 0);

let sum = function(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

// Ethan O'Connell - 7/2/22
// 8 kyu
// Is he gonna survive?
// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

function hero(bullets, dragons){
    return true ? (bullets / dragons) >= 2 : false;
}

function hero(bullets, dragons){
    return (bullets / dragons) >= 2 ? true : false;
}

// Ethan O'Connell - 7/3/22
// 8 kyu
// DNA to RNA Conversion
// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

function DNAtoRNA(dna) {
    const dnaArr = dna.split('');
    
    for (let i = 0; i < dnaArr.length; i++) {
      if (dnaArr[i] === 'T') {
        dnaArr[i] = 'U';
      }
    }
    
    return dnaArr.join('');
}

function DNAtoRNA(dna) {
    return dna.split('').map(i => i == 'T' ? i = 'U' : i).join('');
}

// Ethan O'Connell - 7/4/22
// 8 kyu
// Will you make it?
// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return (distanceToPump / mpg) <= fuelLeft ? true : false;
};

// Ethan O'Connell - 7/5/22
// 8 kyu
// Simple multiplication
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9;
}

// Ethan O'Connell - 7/6/22
// 8 kyu
// Get the mean of an array
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks){
    const avg = marks.reduce((a, c) => a + c, 0) / marks.length;
    
    return Math.floor(avg);
}

// learned how to optimize into one line return

function getAverage(marks){
    return Math.floor(marks.reduce((a, c) => a + c) / marks.length);
}

// Ethan O'Connell - 7/7/22
// 8 kyu
// Reversed Words
// Complete the solution so that it reverses all of the words within the string passed in.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

// same as top solution :)

function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}

// Ethan O'Connell - 7/8/22
// 8 kyu
// Sentence Smash
// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

function smash (words) {
    return words.join(' ');
};

// Ethan O'Connell - 7/9/22
// 8 kyu
// Convert a string to an array
// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function stringToArray(string){
    return string.split(' ');
}

// Ethan O'Connell - 7/10/22
// 8 kyu
// Beginner - Reduce but Grow

function grow(x){
    return x.reduce((previousValue, currentValue) => previousValue * currentValue);
}

// Ethan O'Connell - 7/11/22
// 8 kyu
// Transportation on vacation
// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
    let total = d * 40;
    if (d >= 7) {
      return total - 50;
    } else if (d >= 3) {
      return total - 20;
    }
    return total;
}

// Ethan O'Connell - 7/12/22
// 8 kyu
// Volume of a Cuboid
// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

class Kata {
    static getVolumeOfCuboid(length, width, height) {
      return length * width * height;
    }
}

// Ethan O'Connell - 7/13/22
// 8 kyu
// If you can't sleep, just count sheep!!
// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
    let str = '';
    
    for (let i = 1; i <= num; i++) {
        str += `${i} sheep...`; 
    }
    
    return str;
}

// Ethan O'Connell - 7/14/22
// 8 kyu
// Array plus array
// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.


function arrayPlusArray(arr1, arr2) {
    let arr1Sum = arr1.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    let arr2Sum = arr2.reduce((previousValue, currentValue) => previousValue + currentValue, 0);  
    return arr1Sum + arr2Sum;
}

function arrayPlusArray(arr1, arr2) {
    return (arr1.reduce((previousValue, currentValue) => previousValue + currentValue, 0) + arr2.reduce((previousValue, currentValue) => previousValue + currentValue, 0));
}

function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((previousValue, currentValue) => previousValue + currentValue);
}