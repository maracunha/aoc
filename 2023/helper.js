import { readFile } from "node:fs/promises";
import { readFileSync } from "node:fs";

export async function getPuzzleInput(fileName) {
  const filePath = `./puzzle_inputs/${fileName}.txt`;
	return readFileSync(filePath, "utf8", (err, data) => {
		if (err) throw err;
		return data.toString();
	});
}

export async function getPuzzleInput2(dayIntput) {
  try {
    const filePath = `./puzzle_inputs/${dayIntput}.txt`;
    return await readFile(filePath, { encoding: "utf8" });
  } catch (err) {
    console.error(err.message);
  }
}
