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
    const x = curr.includes("X"); //lose
    const y = curr.includes("Y"); //win
    const z = curr.includes("Z"); //draw

    if (x) {
      if (a) {
        score += 3;
      }
      if (b) {
        score += 1;
      }
      if (c) {
        score += 2;
      }
    }

    if (y) {
      score += 3;
      if (a) {
        score += 1;
      }
      if (b) {
        score += 2;
      }
      if (c) {
        score += 3;
      }
    }
    if (z) {
      score += 6;
      if (a) {
        score += 2;
      }
      if (b) {
        score += 3;
      }
      if (c) {
        score += 1;
      }
    }
  });
  console.log(score); //answer
};

data();
