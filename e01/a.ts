export {}

const input = await Deno.readTextFile("input.txt");

const lines = input.split("\n\n");

let highestValue = 0;

lines.forEach((line) => {
  return line.split("\n").map((s) => parseInt(s, 10)).reduce((a, b) => {
    const sum = a + b;
    if(sum > highestValue) {
      highestValue = sum;
    }

    return sum
  }, 0);
});



console.log(highestValue);
