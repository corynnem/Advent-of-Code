// have to use npm start on express server to run fetch

const data = async () => {
  let text = await fetch("http://localhost:3000/day-two");
  let json = await text.json();
  return possibleGames(json.data);
};

const possibleGames = (games) => {
  console.log(games);
  let allGames = games.map((game) => {
    let eachGame = game.split(":");
    return eachGame[1];
  });
  console.log(allGames);
  // 12 red cubes, 13 green cubes, and 14 blue cubes
  const maxRed = 12;
  const maxGreen = 13;
  const maxBlue = 14;

  let count = 0;
  // games.forEach((game, i) => {
  //   let id = i + 1;
  //   if (
  //     game?.red <= Number(maxRed) &&
  //     game?.green <= Number(maxGreen) &&
  //     game?.maxBlue <= Number(maxBlue)
  //   ) {
  //     count += id;
  //   }
  // });
  // console.log(count);
};

data();
