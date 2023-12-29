import { transformStringToObject } from "./day2_part1.js";

function transformStringToObject3(line) {
  const [_, cubes] = line.split(':');
  const cubesSets = cubes?.split(';');

  let red = 0;
  let blue = 0;
  let green = 0;

  for (let i = 0; i < cubesSets?.length; i++) {
    const colorCubes = transformStringToObject(cubesSets[i]);
    if (colorCubes.red > red) {
      red = colorCubes.red
    }
    if (colorCubes.blue > blue) {
      blue = colorCubes.blue
    }
    if (colorCubes.green > green) {
      green = colorCubes.green
    }
  }

  return red * blue * green;
}


function bla(input) {
  const lines = input.split('\n')
  let totalSum = 0;

  for (let line of lines) {
    const sum = transformStringToObject3(line);
    totalSum = totalSum + sum

  }
  return totalSum;
}

export default function answer(input) {
  return bla(input);
}
