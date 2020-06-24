// https://www.codewars.com/kata/541c8630095125aba6000c00
// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digital_root(n) {
  str = String(n).split(""); //split number into string
  let numsArr = []; // initialize empty array
  for (let num of str) {
    //convert to number and push into array
    numsArr.push(num * 1);
    console.log(numsArr);
  }
  let digitalRoot = numsArr.reduce((sum, current) => sum + current, 0);
  console.log(digitalRoot); //reduce array to single number
  if (digitalRoot > 9) {
    return digital_root(digitalRoot);
  } else {
    return digitalRoot;
  }
}
