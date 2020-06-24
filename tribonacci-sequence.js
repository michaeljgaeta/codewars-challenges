// https://www.codewars.com/kata/556deca17c58da83c00002db
// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(
// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:
// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:
// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]

function tribonacci(signature, n) {
  let tribonacciArr = signature;

  for (let i = 0; i < n; i++) {
    let nextNum = signature[i] + signature[i + 1] + signature[i + 2];
    tribonacciArr.push(nextNum);
  }
  tribonacciArr.pop();
  tribonacciArr.pop();
  tribonacciArr.pop();
  return tribonacciArr;
}

/*fn = fn-1 + fn-2 +fn -3
For the number at n index, 
the value at the index minus 1
plus the value at the index minus 2
plus the value at the index minus 3
push that value to the end of the array
repeat*/
