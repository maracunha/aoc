const letters = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function convertLetterToNumber(str) {
  var newStr = str;
  for (let i = 0; i < letters.length; i++) {
    const newValue = i + 1;
    const index = str.indexOf(letters[i]);

    if (index != -1) {
      const start = letters[i].substring(0,1);
      const end = letters[i].substring(letters[i].length -1);
      const replace = `${start}${newValue}${end}`;
      newStr = newStr.replace(letters[i], replace);
    }
  }

  for (let i = 0; i < letters.length; i++) {
    const newValue = i + 1;
    const index = str.indexOf(letters[i]);

    if (index != -1) {
      const start = letters[i].substring(0,1);
      const end = letters[i].substring(letters[i].length -1);
      //console.log(start, end);
      const replace = `${start}${newValue}${end}`;
      newStr = newStr.replace(letters[i], replace);
    }
  }

  for (let i = 0; i < letters.length; i++) {
    const newValue = i + 1;
    const index = str.indexOf(letters[i]);

    if (index != -1) {
      const start = letters[i].substring(0,1);
      const end = letters[i].substring(letters[i].length -1);
      //console.log(start, end);
      const replace = `${start}${newValue}${end}`;
      newStr = newStr.replace(letters[i], replace);
    }
  }

  return newStr;
}


function extractFirstAndLastNumbers(text) {
  const lines = text.split("\n");

  let firstNumber = null;
  let lastNumber = null;

  let allNumbers = [];

  for (let line of lines) {
    var newLine = convertLetterToNumber(line);

    const numbers = newLine
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

  return allNumbers;
}

export default function answer(input) {
  const result = extractFirstAndLastNumbers(input);
  const sum = result.reduce((acc, curr) => curr + acc);
  return sum;
}
