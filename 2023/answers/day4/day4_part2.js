// Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
function cardWorth(card) {
    if (!card) { return 0 }

    const [cardHeader, games] = card.split(':');
    const [winningNumbers, numbersHave] = games?.split('|');
    const bla = numbersHave?.split(' ').filter(Number);
    const foo = winningNumbers?.split(' ').filter(Number);

    // add one undefined at the end, don't know why.
    const number = cardHeader.match(/\d+/)
    const cardNumber = parseInt(number);

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
            sum++
        }
    }
    return { cardNumber, sum };
}

function worthPoits(input) {
    const cards = input.split('\n')
    const scratchcards = {};

    for (let card of cards) {
        const { cardNumber, sum } = cardWorth(card);

        // need this because the regex add one undefined at the end
        if (!cardNumber) {
            continue
        }

        if (!scratchcards[cardNumber]) {
            scratchcards[cardNumber] = 1;
        } else {
            scratchcards[cardNumber] += 1;
        }

        const matching = Array(parseInt(sum)).fill(1)
        matching.forEach((_, i) => {
            if (!scratchcards[cardNumber + i + 1]) {
                scratchcards[cardNumber + i + 1] = scratchcards[cardNumber];
            } else {
                scratchcards[cardNumber + i + 1] += scratchcards[cardNumber];
            }
        })

    }

    return Object.values(scratchcards).reduce((acc, cur) => acc + cur);
}

export default function answer(input) {
    return worthPoits(input);
}
