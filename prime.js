function primeFactors(n) {
    let factors = [];
    let divisor = 2;

    while (n >= 2) {
        if (n % divisor === 0) {
            factors.push(divisor);
            n = n / divisor;
        } else {
            divisor++;
        }
    }

    return factors;
}

let n = 100;  
let factorsArray = primeFactors(n);


let positionsArray = new Array(n).fill(null);  
for (let i = 0; i < factorsArray.length; i++) {
    positionsArray[i] = factorsArray[i];  }

console.log("Prime factors:", factorsArray);
console.log("Array with prime factors at specific positions:", positionsArray);