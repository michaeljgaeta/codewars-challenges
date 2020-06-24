// https://www.codewars.com/kata/5a4d303f880385399b000001
// Strong number is the number that the sum of the factorial of its digits is equal to number itself.

// For example: 145, since
// 1! + 4! + 5! = 1 + 24 + 120 = 145
// So, 145 is a Strong number.

function strong(n) {
  const originArray = Array.from(n.toString());
  console.log(`Stringified Array: ${originArray}`);
  const finalResult = [];
  for (let char of originArray) {
    const numb = Number(char);
    let result = 1;
    let auxNumb = numb;
    console.log(`Result: ${result}, Number: ${numb}`);
    for (let i = 0; i < numb; i++) {
      //factorial
      result *= auxNumb;
      auxNumb--;
      console.log(`Result: ${result}, Number: ${numb}`);
    }
    finalResult.push(result);
  }
  const sum = finalResult.reduce((acc, el) => acc + el);
  return sum === n ? "STRONG!!!!" : "Not Strong !!";
}
