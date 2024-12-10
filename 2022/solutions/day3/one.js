// have to use npm start on express server to run fetch

const data = async () => {
  let text = await fetch("http://localhost:3000/day-three");
  let json = await text.json();
  rucksack(json.data);
};

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const rucksack = (contents) => {
  let sum = 0;
  contents.forEach((curr, i) => {
    const compartment1 = curr.slice(0, curr.length / 2);
    const compartment2 = curr.slice(curr.length / 2);
    const intersection = compartment1
      .split("")
      .filter((element) => compartment2.includes(element));
    alphabet.forEach((letter, i) => {
      if (intersection[0] === letter) {
        sum += i + 1;
      }
    });
  });
  console.log(sum); // answer
};

data();
