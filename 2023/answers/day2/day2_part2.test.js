import answer from "./day2_part2.js";
import { getPuzzleInput } from "../../helper.js";

const inputTest = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

test("Day 2 | Part 2 test", () => {
  const result = answer(inputTest);
  expect(result).toBe(2286);
});

test("Day 2 | Part 2 final", async () => {
  let startTime = performance.now();
  const input = await getPuzzleInput("day2_2");
  const result = answer(input);
  let time = performance.now() - startTime;
  console.log("Time do exec Mine: ", time);
  expect(result).toBe(63981);
});
