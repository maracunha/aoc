
function cardWorth(card) {
  if (!card) { return 0 }

  const [_, games] = card.split(':');
  const [winningNumbers, numbersHave] = games?.split('|');
  const bla = numbersHave?.split(' ').filter(Number);
  const foo = winningNumbers?.split(' ').filter(Number);

  let isFirstTimes = true
  let sum = 0;

  for (let i = 0; i < foo.length; i++) {
    const n = foo[i];
    const isWinningNumber = bla?.includes(n);

    if (isWinningNumber) {
      if (isFirstTimes) {
        isFirstTimes = false;
        sum = 1;
        continue;
      }
      sum = sum * 2;
    }
  }
  return sum;
}

function worthPoits(input) {
  const cards = input.split('\n')
  let total = 0;

  for (let card of cards) {
    const points = cardWorth(card);

    if (points) {
      total += points;
    }
  }
  return total;
}

export default function answer(input) {
  return worthPoits(input);
}
