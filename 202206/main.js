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