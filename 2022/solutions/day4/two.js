// have to use npm start on express server to run fetch

const data = async () => {
  let text = await fetch("http://localhost:3000/day-four");
  let json = await text.json();
  name(json.data);
};

const name = (param) => {};

data();
