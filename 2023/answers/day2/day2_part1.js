const bagPassibilites = {
  red: 12,
  green: 13,
  blue: 14,
}

export function transformStringToObject(inputString) {
  const result = {};
  const colorCountPairs = inputString.trim().split(', ');
  colorCountPairs.forEach(pair => {
    const [count, color] = pair.split(' ');
    result[color] = parseInt(count);
  });
  return result;
}

function checkColors(red, green, blue) {
  if (red > bagPassibilites.red) {
    return false
  }
  if (green > bagPassibilites.green) {
    return false
  }
  if (blue > bagPassibilites.blue) {
    return false
  }
  return true;
}

function isPossibleGame(line) {
  if (!line) { return 0 }

  const [gameIdStr, cubes] = line.split(':');
  const gameId = parseInt(gameIdStr.match(/-?\d+(\.\d+)?/g));
  const cubesSets = cubes?.split(';');
  let id;

  for (let i = 0; i < cubesSets.length; i++) {
    const colorCubes = transformStringToObject(cubesSets[i]);
    const checkedSet = checkColors(colorCubes.red, colorCubes.green, colorCubes.blue);
    id = checkedSet ? gameId : -1;

    if (id == -1) {
      return
    }
  }
  return id;
}

function sumPossiblesGames(input) {
  const lines = input.split('\n')
  let sumIds = 0;

  for (let line of lines) {
    const id = isPossibleGame(line);

    if (id) {
      sumIds = id + sumIds;
    }
  }
  return sumIds;
}

export default function answer(input) {
  return sumPossiblesGames(input);
}
