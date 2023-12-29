function extractFirstAndLastNumbers(text) {
  const lines = text.split("\n");

  let firstNumber = null;
  let lastNumber = null;

  let allNumbers = [];

  for (const line of lines) {
    // Extract numbers from the line using regular expression
    const numbers = line
      .match(/-?\d+(\.\d+)?/g)
      ?.join("")
      .split("");

    // If numbers are found in the line
    if (numbers) {
      // Extract the first number from the line
      const currentFirstNumber = numbers[0];

      // Update the firstNumber if it's not set yet
      if (firstNumber == null) {
        firstNumber = currentFirstNumber;
      }

      // Update the lastNumber with the current first number (it gets updated in each iteration)
      lastNumber = numbers[numbers.length - 1];
      allNumbers.push(Number(`${firstNumber}${lastNumber}`));
    }

    firstNumber = null;
    lastNumber = null;
  }

  // Return the first and last numbers
  return allNumbers;
}

export default function answer(input) {
  const result = extractFirstAndLastNumbers(input);
  const sum = result.reduce((acc, curr) => curr + acc);
  return sum;
}
