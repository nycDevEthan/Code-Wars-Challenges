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