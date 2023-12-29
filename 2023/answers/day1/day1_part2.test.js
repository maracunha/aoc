import answer from './day1_part2.js'
import { getPuzzleInput } from '../../helper.js';

const input = await getPuzzleInput('day01_2');

const inputTest = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

const inputTest2 = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
ssevenhcltwoseven2cxrmxxcr
988seven3seven
7pqrstsixteen
oneight`;

test('Day 1 | Part 2 test', () => {

  const result = answer(inputTest);
  expect(result).toBe(281);
});

test('Day 1 | Part 2 - 2 test', () => {

  const result = answer(inputTest2);
  expect(result).toBe(281 + 72 + 97 + 18);
});

test('Day 1 | Part 2 final', () => {

  const result = answer(input);
  expect(result).toBe(54578);
});
