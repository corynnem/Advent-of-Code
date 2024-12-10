// have to use npm start on express server to run fetch

const data = async () => {
  let text = await fetch("http://localhost:3000/day-two");
  let json = await text.json();
  rpc(json.data);
};

const rpc = (strategy) => {
  let score = 0;

  strategy.forEach((curr, i) => {
    const a = curr.includes("A");
    const b = curr.includes("B");
    const c = curr.includes("C");
    const x = curr.includes("X");
    const y = curr.includes("Y");
    const z = curr.includes("Z");

    if ((a && x) || (b && y) || (c && z)) {
      score += 3;
    }
    if ((x && c) || (y && a) || (z && b)) {
      score += 6;
    }

    if (x) {
      score += 1;
    }
    if (y) {
      score += 2;
    }
    if (z) {
      score += 3;
    }
  });
  console.log(score); //answer
};

data();
