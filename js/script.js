// Set Up Prime Sieve Class
class PrimeSieve {
    constructor(num) {
        const sieve = Array(Math.floor((num-1)/2)).fill(true);
        const upper = Math.floor((num-1)/2);
        const sqrtUpper = Math.floor((Math.sqrt(num) - 1)/2);
        for (let i=0;i<=sqrtUpper;i++) {
            if (sieve[i]) {
                const prime = 2 * i + 3;
                const primeSqInd = 2*i**2 + 6*i + 3;
                for (let j=primeSqInd;j<upper;j+=prime) {
                    sieve[j] = false;
                }
            }
        }

        this._sieve = sieve;
    }

    // Method to check if number num is prime
    isPrime(num) {
        return num===2 ? true : num%2===0 ? false : this.isOddPrime(num);
    }

    // Method to check if number num is an odd prime
    isOddPrime(num) {
        return this._sieve[parseInt((num-3)/2)];
    }
};

// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if the input is valid
    if (isNaN(num) || num.length==0 || num<2 || num>8 || (num.length>1 && num[0] == "0") || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 2 and 8.  Do not include leading zeros.`;
    } else {
        txt += `You have requested ${num} primes. <p>`;
        txt += `Smallest prime is ${primeDigitReplacements(num)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}