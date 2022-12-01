export {}

const input = await Deno.readTextFile("input.txt");

const lines = input.split("\n\n");

const x = lines.map((line) => {
  return line.split("\n").map((s) => parseInt(s, 10)).reduce((a, b) => {
    const sum = a + b;

    return sum
  }, 0);
}).sort((a, b) => b - a);

console.log(x[0], x[1], x[2]);
console.log(x[0] + x[1] + x[2]);
