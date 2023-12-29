import { readFile } from 'node:fs/promises';

const input2 = `11abc2
 pqr3stu8vwx
 a1b2c3d4e5f
 treb7uchet`

async function getPuzzleInput() {
  try {
    const filePath = './puzzle_inputs/day01_1.txt';
    const contents = await readFile(filePath, { encoding: 'utf8' });
    return contents;
  } catch (err) {
    console.error(err.message);
  }
}

const input = await getPuzzleInput();

function extractFirstAndLastNumbers(text) {
    const lines = text.split('\n');

    let firstNumber = null;
    let lastNumber = null;

    let allNumbers = [];

    for (const line of lines) {
        // Extract numbers from the line using regular expression
        const numbers = line.match(/-?\d+(\.\d+)?/g).join('').split('');
      console.log(numbers);

        // If numbers are found in the line
        if (numbers) {
            // Extract the first number from the line
            const currentFirstNumber = numbers[0]

            // Update the firstNumber if it's not set yet
            if (firstNumber == null) {
                firstNumber = currentFirstNumber;
            }

            // Update the lastNumber with the current first number (it gets updated in each iteration)
            lastNumber = numbers[numbers.length -1];
            allNumbers.push(Number(`${firstNumber}${lastNumber}`));
        }

        firstNumber = null;
        lastNumber = null;
    }

    // Return the first and last numbers
    return allNumbers
}

const result = extractFirstAndLastNumbers(input);
const sum = result.reduce((acc, curr) => curr + acc);
console.log(result, sum);



