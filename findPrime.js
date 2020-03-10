function findPrime(n) {
    const result = [];
    const isPrime = n => {
      if (n === 2) {
        return true;
      }
      if (!Number.isInteger(n) || n < 2 || !(n % 2)) {
        return false;
      }
      for (let i = 3; i < n; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return true;
    };
  
    for (let i = 0; i < n; i++) {
      if (isPrime(i)) {
        result.push(i);
      }
    }
    return result;
  }
  module.exports = findPrime;