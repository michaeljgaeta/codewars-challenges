// https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

var capitals = function (word) {
	let resultArr = [];
  for (let char of word) {
    if (char == char.toUpperCase()) {
      resultArr.push(word.indexOf(char));
    } else {
      continue;
    }
  }
  return resultArr;
};