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

let data = getData();

const formatData = (data) => {
  const row1 = data?.row1;
  const row2 = data?.row2;

  const sortedRow1 = row1.sort();
  const sortedRow2 = row2.sort();
  let finalCount = 0;
  let sortedArray = [];

  sortedRow1.forEach((row1, i) => {
    sortedRow2.forEach((row2) => {
      if (row1 === row2) {
        sortedArray.push([]);
        let arrayLength = sortedArray.length;
        sortedArray[arrayLength - 1].push(row1);
      }
    });
  });
  console.log(sortedArray);
  function groupDuplicates(array) {
    const seen = {}; // Object to track indices of duplicates
    const result = []; // Resulting array of arrays

    array.forEach((item) => {
      if (seen[item] === undefined) {
        // First time we see this item
        seen[item] = result.length; // Track where it should go
        result.push([item]); // Start a new group
      } else {
        // Duplicate item, add to its group
        result[seen[item]].push(item);
      }
    });

    return result;
  }

  // Example usage

  const grouped = groupDuplicates(sortedArray.flat());
  grouped.forEach((group) => {
    finalCount = finalCount + group.length * group[0];
  });
  console.log(grouped, finalCount);
  return finalCount; //19437052
};
