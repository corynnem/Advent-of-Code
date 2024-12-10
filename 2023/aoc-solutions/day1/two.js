// have to use npm start on express server to run fetch

const data = async () => {
  let text = await fetch("http://localhost:3000/day-one");
  let json = await text.json();
  console.log(json.data);
  return sumOfCalibrationNums(json.data);
};

const validNums = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};
const validNumsArray = Object.keys(validNums).map((key) => ({
  key: key,
  value: validNums[key],
}));

const sumOfCalibrationNums = (calibrationStrings) => {
  let calibrationNums = calibrationStrings.map((calibrationString) => {
    let currentWord = "";
    let result = "";
    calibrationString.split("").forEach((character, i) => {
      let typeCast = Number(character);

      if (isNaN(character)) {
        currentWord += character;
        if (validNums[currentWord]) {
          result += validNums[currentWord];
          currentWord = `${currentWord[currentWord.length - 1]}`;
        } else {
          validNumsArray.forEach((num) => {
            if (currentWord.includes(num.key)) {
              result += num.value;
              currentWord = `${currentWord[currentWord.length - 1]}`;
            }
          });
        }
      } else {
        result += typeCast;
      }
    });

    return Number(`${result[0]}${result[result.length - 1]}`);
  });

  let answer = calibrationNums.reduce((endNum, a) => endNum + a, 0);
};

data();
