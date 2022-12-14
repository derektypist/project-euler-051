// Set Up Prime Sieve Class
class PrimeSieve {
    constructor(num) {
        const sieve = Array(Math.floor((num - 1) / 2)).fill(true);
        const upper = Math.floor((num - 1) / 2);
        const sqrtUpper = Math.floor((Math.sqrt(num) - 1) / 2);
        for (let i = 0; i <= sqrtUpper; i++) {
            if (sieve[i]) {
                const prime = 2 * i + 3;
                const primeSqInd = 2 * i ** 2 + 6 * i + 3;
                for (let j = primeSqInd; j < upper; j += prime) {
                    sieve[j] = false;
                }
            }
        }

        this._sieve = sieve;
    }

    // Method to check if number num is prime
    isPrime(num) {
        return num === 2 ? true : num % 2 === 0 ? false : this.isOddPrime(num);
    }

    // Method to check if number num is an odd prime
    isOddPrime(num) {
        return this._sieve[parseInt((num - 3) / 2)];
    }
};

// Function to Show Solution
function showSolution() {
    // Set Up Variable
    let txt = "";
    // Apply For Loop
    for (let i=6;i<=8;i++) {
      txt += `With ${i} prime value family, smallest prime is ${primeDigitReplacements(i)}.<br>`;
    }

    // Display Information in the Browser
    document.getElementById("solution").innerHTML = txt;
}

/*
    Function to Return the Solution to the Problem as described in
    https://projecteuler.net/problem=51

    primeDigitReplacements(6) returns 13
    primeDigitReplacements(7) returns 56003
    primeDigitReplacements(8) returns 121313
*/
function primeDigitReplacements(n) {
    // Create new instance of PrimeSieve
    const primeSieve = new PrimeSieve(n * n * n * 2000);

    function isNFamily(number, n) {
        const prime = number.toString();
        const lastDigit = prime[prime.length - 1];
        return doesReplacingMakeFamily(prime, '0', n) ||
          doesReplacingMakeFamily(prime, '2', n) ||
          (lastDigit !== '1' && doesReplacingMakeFamily(prime, '1', n));
      }
    
      function doesReplacingMakeFamily(prime, digitToReplace, family) {
        let miss = 0;
        const base = parseInt(
          prime
            .split('')
            .map(digit => digit == digitToReplace ? '0' : digit)
            .join('')
        );
        const replacements = parseInt(
          prime
            .split('')
            .map(digit => digit === digitToReplace ? '1' : '0')
            .join('')
        );
        const start = prime[0] === digitToReplace ? 1 : 0;
        for (let i = start; i < 10; i++) {
          const nextNumber = base + i * replacements;
          if (!isPartOfFamily(nextNumber, prime)) miss++;
          if (10 - start - miss < family) break;
        }
        return 10 - start - miss === family;
      }
    
      function isPartOfFamily(number, prime) {
        return (
          primeSieve.isPrime(number) && number.toString().length === prime.length
        );
      }
    
      for (let number = 1; number < 125000; number++) {
        if (primeSieve.isPrime(number) && isNFamily(number, n)) {
          return number;
        }
      }
      return -1;
    }
    


// Function to Hide Solution
function hideSolution() {
    let txt = "";
    document.getElementById("solution").innerHTML = txt;
}