showPrimes(20);

function showPrimes(limit) {


    for (let i = 1; i <= limit; i++) {
        if (isPrime(i))
            console.log(i);

    }
}


function isPrime(number) {
    for (let factor = 2; factor < number; factor++) {
        if (number % factor === 0) return false;
    }
    return true;
}