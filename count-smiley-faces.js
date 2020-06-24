//www.codewars.com/kata/583203e6eb35d7980400002a
// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

//return the total number of smiling faces in the array
https: function countSmileys(testArr) {
  if (!testArr) {
    return 0;
  } else {
    let validSmiles = [
      ":)",
      ";)",
      ":-)",
      ":~)",
      ":D",
      ";D",
      ":-D",
      ":~D",
      ";~D",
      ";-D",
      ";~)",
      ";-)"
    ];
    let smileCount = 0;
    for (let item of testArr) {
      for (let smile of validSmiles) {
        if (smile == item) {
          smileCount++;
        }
      }
    }
    return smileCount;
  }
}
