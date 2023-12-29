import answer from "./day2_part1.js";
import answerOther from "./day2-1-other.js"
import { getPuzzleInput } from "../../helper.js";

const inputTest = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 18: 1 red, 2 blue; 1 green, 4 blue; 1 blue; 5 blue; 1 green, 3 red, 6 blue
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

test("Day 1 | Part 1 test", () => {
  const result = answer(inputTest);
  expect(result).toBe(8 + 18);
});

test("Day 1 | Part 1 final", async () => {
  let startTime = performance.now();
  const input = await getPuzzleInput("day2_1");
  const result = answer(input);
  let time = performance.now() - startTime;
  console.log('Time do exec Mine: ',time);
  expect(result).toBe(2449);
});

test("Day 1 | Part 1 Other", async () => {
  let startTime = performance.now();
  const input = await getPuzzleInput("day2_1");
  const result = answerOther(input);
  let time = performance.now() - startTime;
  console.log('Time do exec: ',time);
  expect(result).toBe(2449);
});
