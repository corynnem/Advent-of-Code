// have to use npm start on express server to run fetch

const data = async () => {
  let text = await fetch("http://localhost:3000/day-one");
  let json = await text.json();
  return sumOfCalibrationNums(json.data);
};

const sumOfCalibrationNums = (calibrationStrings) => {
  console.log(calibrationStrings);
};

data();
