// Function to calculate the arithmetic square root of a number.
function calculateSqrt(number) {
	const getNumber = Number(number);

	if (isNaN(getNumber) || !isFinite(getNumber)) {
		return 'Error: Please, enter a number.';
	}

	if (getNumber < 0) {
		return 'Please, enter a positive number.';
	}

	const squareRoot = Math.sqrt(getNumber);
	const formattedResult = squareRoot % 1 === 0 ? squareRoot : squareRoot.toFixed(3);

	return `The arithmetic square root of ${getNumber} is ${formattedResult}.`;
}

// Function to get a number from the user and calculate it's square root.
function getSqrt() {
	const numberInput = prompt('Enter a number:');

	if (numberInput === null || numberInput.trim() === '') {
		console.log('Error: Please, enter a number!');
	} else {
		const result = calculateSqrt(numberInput);
		console.log(result);
	}
}

// Call the getSqrt function to calculate the square root.
getSqrt();
