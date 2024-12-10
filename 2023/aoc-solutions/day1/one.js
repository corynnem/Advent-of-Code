// have to use npm start on express server to run fetch

const data = async () => {
  let text = await fetch("http://localhost:3000/day-one");
  let json = await text.json();
  return sumOfCalibrationNums(json.data);
};

const sumOfCalibrationNums = (calibrationStrings) => {
  let calibrationNums = calibrationStrings.map((calibrationString) => {
    let numbers = calibrationString.split("").filter((character) => {
      let typeCast = Number(character);
      if (!isNan(typeCast)) return typeCast;
    });
    return Number(`${numbers[0]}${numbers[numbers.length - 1]}`);
  });
  let answer = calibrationNums.reduce((endNum, a) => endNum + a, 0);
  console.log(answer);
};

data();
