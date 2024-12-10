// have to use npm start on express server to run fetch

const data = async () => {
  let text = await fetch("http://localhost:3000/day-three");
  let json = await text.json();

  let newData = [];
  let size = 3;
  for (let i = 0; i < json.data.length; i += size) {
    newData.push(json.data.slice(i, i + size));
  }

  rucksack(newData);
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
    const elf1 = curr[0];
    const elf2 = curr[1];
    const elf3 = curr[2];

    const intersection = elf1
      .split("")
      .filter((element) => elf2.includes(element) && elf3.includes(element));
    alphabet.forEach((letter, i) => {
      if (intersection[0] === letter) {
        sum += i + 1;
      }
    });
  });
  console.log(sum); // answer
};

data();
