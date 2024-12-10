// have to use npm start on express server to run fetch

const data = async () => {
  let text = await fetch("http://localhost:3000/day-one");
  let json = await text.json();
  return highestCalorieCount(json.data);
};

const highestCalorieCount = (calories) => {
  let allCalories = calories.map((elf, index) => {
    return elf.reduce((end, item) => {
      return end + item;
    });
  });
  let descArr = allCalories.sort((a, b) => b - a);
  const top3 = descArr[0] + descArr[1] + descArr[2];
  console.log(top3);
};

data();
