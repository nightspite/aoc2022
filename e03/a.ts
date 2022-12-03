export {}

const input = await Deno.readTextFile("input.txt");

const lines = input.split("\n");

const getScore = (char: string) => {
  if (char == char.toUpperCase()) {
    return char.charCodeAt(0) - 38;
  } 
  return char.charCodeAt(0) - 96
}

let score = 0;

for (const line of lines) {
  const firstHalf = Array.from(new Set(line.slice(0, line.length / 2)));
  const secondHalf = Array.from(new Set(line.slice(line.length / 2)));

  firstHalf.forEach((char) => {
    if (secondHalf.includes(char)) {
      score += getScore(char);
      console.log(firstHalf, secondHalf, char, getScore(char));
    }
  });
}

console.log(score);

