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