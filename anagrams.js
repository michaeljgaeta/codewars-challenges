// https://www.codewars.com/kata/587e18b97a25e865530000d8/solutions

function anagramCounter(arrayOfWords) {
  let sortedWords = arrayOfWords.map((word) => word.split("").sort().join(""));
  let numberOfAnagrams = 0;

  sortedWords.forEach((word, theIndex) => {
    for (let i = theIndex + 1; i < sortedWords.length; i++) {
      if (word === sortedWords[i]) {
        numberOfAnagrams++;
      }
    }
  });
  return numberOfAnagrams;
}
