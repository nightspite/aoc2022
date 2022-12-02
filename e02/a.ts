export {}

// A - rock
// B - paper
// C - scissors

// X - rock
// Y - paper
// Z - scissors

// rock - 1
// paper - 2
// scissors - 3

// lost - 0
// draw - 3
// win - 6

type Opponent = 'A' | 'B' | 'C'
const OPONENT = ['A', 'B', 'C'];
type My = 'X' | 'Y' | 'Z';
const MY = ['X', 'Y', 'Z'];

const LOST_MAP = {
  A: 'Z',
  B: 'X',
  C: 'Y',
}

const WIN_MAP = {
  A: 'Y',
  B: 'Z',
  C: 'X',
}

const input = await Deno.readTextFile("input.txt");

const lines = input.split("\n");

let score = 0;

for (const line of lines) {
  const [a, b] = line.split(" ");
  const aIndex = OPONENT.indexOf(a);
  const bIndex = MY.indexOf(b);

  if(aIndex === bIndex) {
    score += 3;
  } else if (WIN_MAP[a as Opponent] === b) {
    score += 6;
  } else if (LOST_MAP[a as Opponent] === b) {
    score += 0;
  }

  score += bIndex + 1;
}


console.log(score);
