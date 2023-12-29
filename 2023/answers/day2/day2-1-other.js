import { Performance } from "perf_hooks";
import { readFileSync } from "node:fs";

const MAXCUBEVALUES = {
	red: 12,
	blue: 14,
	green: 13,
};

const readInput = (fileName) => {
	return readFileSync(fileName, "utf8", (err, data) => {
		if (err) throw err;
		return data.toString();
	});
};

const readAndSplitInputByLine = (inputFile) => {
	return inputFile.split(/\r?\n/);
};

const compareCubeValues = (value, color) => value <= MAXCUBEVALUES[color];

const isPossibleCube = (gameSet) => {
	let isValidSet = true;
	const cubeArr = gameSet.split(",");
	cubeArr.map((cube) => {
		const trimmedCube = cube.trim();
		const [value, color] = trimmedCube.split(" ");
		isValidSet &&= compareCubeValues(parseInt(value), color);
	});
	return isValidSet;
};

const getGameIdAndSets = (line) => {
	const lineArr = line.split(":");
	const gameId = lineArr[0];
	const gameSets = lineArr[1]?.split(";");
	return { gameId, gameSets };
};

const checkIfthisGameIsPossible = (acc, input, index) => {
	const { gameId, gameSets } = getGameIdAndSets(input);
	const result = gameSets?.map(isPossibleCube).reduce((acc, cubeSet) => {
		return acc && cubeSet;
	}, true);
	if (result) acc += index + 1;
	return acc;
};

const getSumOfPossibleGameIds = (inputFile) => {
	const inputArr = readAndSplitInputByLine(inputFile);
	console.log(`length of file: ${inputArr.length}`);
	const sumOfGameIds = inputArr.reduce(checkIfthisGameIsPossible, 0);
	return sumOfGameIds;
};


export default function answer(input) {
  return getSumOfPossibleGameIds(input);
}
