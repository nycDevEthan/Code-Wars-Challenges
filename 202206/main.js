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

// Ethan O'Connell - 6/08/22
// 8 kyu
// Third Angle of a Triangle
// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle

function otherAngle(a, b) {
    return (180 - (a + b));
  }