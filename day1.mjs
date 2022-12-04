import { readFile } from 'node:fs/promises';

async function getItems() {
  try {
    const filePath = './day1_input.txt';
    const contents = await readFile(filePath, { encoding: 'utf8' });
    return contents;
  } catch (err) {
    console.error(err.message);
  }
}

let curr = 0;

let max = 0;
let max2 = 0;
let max3 = 0;

const items = await getItems();
const bag = items.split('\n');

for (const calories of bag) {
  if (calories) {
    curr += +calories;
  } else {
    if (curr > max) {
      max2 = max;
      max = curr;
    } else if (curr > max2) {
      max3 = max2;
      max2 = curr;
    } else if (curr > max3) {
      max3 = curr;
    };
    curr = 0;
  };
  
};

console.log({ max });
console.log('sum:', max + max2 + max3)
