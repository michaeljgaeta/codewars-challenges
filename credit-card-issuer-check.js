// Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.

// Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.

// | Card Type  | Begins With          | Number Length |
// |------------|----------------------|---------------|
// | AMEX       | 34 or 37             | 15            |
// | Discover   | 6011                 | 16            |
// | Mastercard | 51, 52, 53, 54 or 55 | 16            |
// | VISA       | 4                    | 13 or 16      |
// Examples
// getIssuer(4111111111111111) == "VISA"
// getIssuer(4111111111111) == "VISA"
// getIssuer(4012888888881881) == "VISA"
// getIssuer(378282246310005) == "AMEX"
// getIssuer(6011111111111117) == "Discover"
// getIssuer(5105105105105100) == "Mastercard"
// getIssuer(5105105105105106) == "Mastercard"
// getIssuer(9111111111111111) == "Unknown"

function getIssuer(number) {
  number = number.toString();
  if (
    (number.charAt(0) == 3 && number.charAt(1) == 4 && number.length == 15) ||
    (number.charAt(0) == 3 && number.charAt(1) == 7 && number.length == 15)
  ) {
    return "AMEX";
  } else if (
    number.charAt(0) == 6 &&
    number.charAt(1) == 0 &&
    number.charAt(2) == 1 &&
    number.charAt(3) == 1 &&
    number.length == 16
  ) {
    return "Discover";
  } else if (
    (number.charAt(0) == 5 && number.charAt(1) == 1) ||
    (number.charAt(0) == 5 && number.charAt(1) == 2) ||
    (number.charAt(0) == 5 && number.charAt(1) == 3) ||
    (number.charAt(0) == 5 && number.charAt(1) == 4) ||
    (number.charAt(0) == 5 && number.charAt(1) == 5 && number.length == 16)
  ) {
    return "Mastercard";
  } else if (
    (number.charAt(0) == 4 && number.length == 13) ||
    (number.charAt(0) == 4 && number.length == 16)
  ) {
    return "VISA";
  } else {
    return "Unknown";
  }
}
