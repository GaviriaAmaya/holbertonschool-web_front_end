// Timing execution in JavaScript

/**
 * Shows the prime numbers on the interval from 2 to 100
 */
function countPrimeNumbers() {
	let primes = [2,];
	let counter = 3;
	let index = 0;

	while (counter != 100) {
		let isPrime = true;

		for (index in primes) {
			if (counter % primes[index] == 0) {
				isPrime = false;
				break;
			}
		}

		if (isPrime === true) {
			primes.push(counter);
		}
		counter++;
	}
	return primes.length;
}

const preExe = performance.now();
for (let exe = 100; exe > 0; exe--) {
	countPrimeNumbers();
}
const postExe = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${postExe - preExe} milliseconds.`);
