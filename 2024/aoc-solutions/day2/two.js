// have to use npm start on express server to run fetch

const getData = async () => {
  try {
    let text = await fetch("http://localhost:8888/day-two");
    let json = await text.json();
    formatData(json.data);
  } catch (e) {
    console.info(e);
  }
};

let data = getData();

const formatData = (data) => {
  let isSafeDecreased = data.map((arr) => {
    const decreased = isDecreasing(arr);
    return decreased;
  });
  const isSafeIncreased = data.map((arr) => {
    const increased = isIncreasing(arr);
    return increased;
  });

  const increasedFiltered = isSafeIncreased.filter((val) => val !== false);
  const decreasedFiltered = isSafeIncreased.filter((val) => val !== false);
  console.log(increasedFiltered, decreasedFiltered);

  const isSafe = [...increasedFiltered, ...decreasedFiltered];
  console.log(isSafe.length);
  return isSafe.length;
};

const isDecreasing = (numbers) => {
  let allDecreased = numbers.map((number, i) => {
    if (!(i > numbers.length) && number > numbers[i + 1]) {
      console.log();
      const isSafe =
        number - numbers[i + 1] >= 1 && numbers[i] - numbers[i + 1] <= 3;
      return isSafe;
    }
    return false;
  });

  const filteroutLast = allDecreased.filter(
    (_, i) => i !== allDecreased.length - 1
  );
  const checkDecreased = filteroutLast.every((val) => val === true);
  return checkDecreased;
};

const isIncreasing = (numbers) => {
  let allIncreased = numbers.map((number, i) => {
    if (!(i > numbers.length) && number < numbers[i + 1]) {
      console.log(numbers[i + 1] - number);
      const isSafe =
        numbers[i + 1] - number >= 1 && numbers[i + 1] - number <= 3;

      return isSafe;
    }
    return false;
  });
  const filteroutLast = allIncreased.filter(
    (_, i) => i !== allIncreased.length - 1
  );
  // console.log(numbers, allIncreased);
  const checkIncreased = filteroutLast.every((val) => val === true);

  return checkIncreased;
};
