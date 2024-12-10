// have to use npm start on express server to run fetch

const data = async () => {
  let text = await fetch("http://localhost:3000/day-four");
  let json = await text.json();
  crossover(json.data, json.ogArr);
};

const crossover = (assignments) => {
  console.log(assignments);
  let newAssignments = assignments.map((item) => {
    for (let i = 0; i <= item.length; i++) {
      let everyAss = assignments.every((assignment) => {
        console.log(assignment[i], item[i]);
        return assignment[i].includes(item[i]);
      });
      return everyAss;
    }
  });
  console.log(newAssignments);
};

data();
