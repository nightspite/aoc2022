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

const chunkSize = 3;
for (let i = 0; i < lines.length; i += chunkSize) {
    const group = lines.slice(i, i + chunkSize);

    const first = Array.from(new Set(group[0]));
    const second = Array.from(new Set(group[1]));
    const third = Array.from(new Set(group[2]));

    first.forEach((char) => {
    if (second.includes(char)) {
      if (third.includes(char)) {
        score += getScore(char);
      }
    }
  });

}


console.log(score);

