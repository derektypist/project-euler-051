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