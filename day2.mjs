import { readFile } from 'node:fs/promises';

async function getItems() {
  try {
    const filePath = './day2_input.txt';
    const contents = await readFile(filePath, { encoding: 'utf8' });
    return contents;
  } catch (err) {
    console.error(err.message);
  }
}

const items = await getItems();

const sampleGames = `A Y
B X
C Z`;

/* The first column is what your opponent is going to play: 
A for Rock, 
B for Paper,
C for Scissors. 

The second column, you reason, must be what you should play in response: 
X for Rock,
Y for Paper,
Z for Scissors. 

1 for Rock, 
2 for Paper,
3 for Scissors

plus the score for the outcome of the round (
0 if you lost, 
3 if the round was a draw,
6 if you won).
*/

const bla = items.split('\n');

function shapeValue(shape) {
  switch (shape) {
    case 'A X':
      return 3 + 1;
    case 'B X':
      return 0 + 1;
    case 'C X':
      return 6 + 1;
    case 'A Y':
      return 6 + 2;
    case 'B Y':
      return 3 + 2;
    case 'C Y':
      return 0 + 2;
    case 'A Z':
      return 0 + 3;
    case 'B Z':
      return 6 + 3;
    case 'C Z':
      return 3 + 3;
    default:
      return 0;
  };
};

let sum = 0

for (const shape of bla) {
  sum += shapeValue(shape);
};

console.log({ sum });
