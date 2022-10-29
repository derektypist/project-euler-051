# Project Euler 051 - Prime Digit Replacements

By replacing the 1st digit of the 2-digit number *3, it turns out that six of the nine possible values: 13, 23, 43, 53, 73 and 83 are all prime.

By replacing the 3rd and 4th digits of 56**3 with the same digit, this 5-digit number is the first example having seven primes among the ten generated numbers, yielding the family 56003, 56113, 56333, 56443, 56663, 56773, and 56993.  Consequently 56003, being the first member of this family, is the smallest prime with this property.

Find the smallest prime which, by replacing part of the number (not necessarily adjacent digits) with the same digit, is part of an n prime value family.

Information at [Project Euler 051](https://projecteuler.net/problem=51)

## UX

**Getting Started**

Enter a whole number between 4 and 8 (without leading zeros such as 04) and select the Submit Button.  You will see the number entered as well as the smallest prime in the family, unless you have made an invalid input.  Select the reset button to clear the information or to start again.

**User Stories**

As a user, I expect to get an error message, if I do any of:

- Not enter anything in the input field
- Entering text other than a number in the input field
- Entering a number less than 4 or greater than 8
- Including leading zeros such as 04
- Entering a number, but it is not an integer

As a user, I expect the function `primeDigitReplacements(6)` to return a number.

As a user, I expect the function `primeDigitReplacements(6)` to return 13.

As a user, I expect the function `primeDigitReplacements(7)` to return 56003.

As a user, I expect the function `primeDigitReplacements(8)` to return 121313.

User Stories on function `primeDigitReplacements(n)` taken from [FreeCodeCamp - Coding Interview Prep - Project Euler 051](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-51-prime-digit-replacements)

**Information Architecture**

The function `primeDigitReplacements(n)` returns a number, where `n` is a number between 4 and 8.

## Features

Allows the user to enter the number of primes requested as well as getting the smallest prime that is part of an n prime value family.  Performs checks on valid user input.  If the input is not valid, an error message is displayed.

## Technologies

Uses HTML5, CSS3, JavaScript, Bootstrap 5.2.2 and Google Fonts.

## Testing

Ensure all user stories have been met.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/project-euler-051) at the main branch.

## Credits

### Content

`PrimeSieve class` in `script.js` taken from [FreeCodeCamp on GitHub](https://github.com/freeCodeCamp/freeCodeCamp), accessed on 29 October 2022.

### Acknowledgements

- [Project Euler](https://projecteuler.net)
- [FreeCodeCamp](https://www.freecodecamp.org)



