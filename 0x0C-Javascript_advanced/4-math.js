// Function to divide by it's parameters
function divideBy(firstNumber) {
	return secondNumber => {
		return secondNumber / firstNumber;
	}
}

// Function that adds by it's parameters
function addBy(firstNumber) {
	return secondNumber => {
		return secondNumber + firstNumber;
	}
}

// Closures:
let addBy100 = addBy(100);
let addBy1000 = addBy(1000);
let divideBy10 = divideBy(10);
let divideBy100 = divideBy(100);
