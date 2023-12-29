import answer from "./day1_part1.js";
import { getPuzzleInput } from "../../helper.js";

const inputTest = `11abc2
 pqr3stu8vwx
 a1b2c3d4e5f
 treb7uchet`;

const input = await getPuzzleInput("day01_1");

test("Day 1 | Part 1 test", () => {
  const result = answer(inputTest);
  expect(result).toBe(142);
});

test("Day 1 | Part 2 final", () => {
  const result = answer(input);
  expect(result).toBe(55208);
});
