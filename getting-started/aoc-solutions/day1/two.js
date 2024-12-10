// have to use npm start on express server to run fetch

const getData = async () => {
  try {
    let text = await fetch("http://localhost:8888/day-one");
    let json = await text.json();
    formatData(json.data);
  } catch (e) {
    console.info(e);
  }
};

const formatData = (data) => {
  console.log(data);
};
