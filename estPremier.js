const isPrime = function(n) {
    if (n < 0) {
        return false;
    } else {
        for (let i = 2; n > i; i++) {
            if (n % i == 0) {
                return (false);
            }
        }
        return (true);
    }
};

const listPrime = function(n) {
    let list = [];
    const nint = Math.floor(n);
    for (let i = 2; i < nint; i++) {
        if (isPrime(i)) {
            list.push(i);
        }
    }
    return (list);
};

module.exports = listPrime;