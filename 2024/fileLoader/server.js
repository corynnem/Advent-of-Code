const Express = require("express");
const fs = require("fs");

const app = Express();
const { cors } = require("./middleware");

app.use(Express.json());
app.use(cors);

app.get("/", (_, res) => {
  res.json({ message: "success" });
});

app.get("/day-one", (_, res) => {
  fs.readFile("../aoc-solutions/day1/data.txt", "utf8", (err, data) => {
    let arr = data.split("\r\n");
    const row1 = arr.map((rows) => {
      const splitRows = rows.split(" ");
      return splitRows[0];
    });
    const row2 = arr.map((rows) => {
      const splitRows = rows.split(" ");
      return splitRows[3];
    });

    if (err) {
      res.send({
        err,
      });
    } else {
      res.json({
        data: {
          row1,
          row2,
          data,
        },
      });
    }
  });
});

// Starter endpoint
app.get("/day-two", (req, res) => {
  fs.readFile("../aoc-solutions/day2/data.txt", "utf8", (err, data) => {
    let arr = data.split("\r\n");
    console.log(arr);

    let formattedArray = arr.map((item) => {
      return item.split(" ");
    });
    if (err) {
      res.json({
        error: err,
      });
    } else {
      res.json({
        data: formattedArray,
      });
    }
  });
});

// Starter endpoint
app.get("/day-***", (req, res) => {
  fs.readFile("../aoc-solutions/day*/data.txt", "utf8", (err, data) => {
    let arr = data.split("\r\n");
    console.log(data, arr);
    if (err) {
      res.json({
        error: err,
      });
    } else {
      res.json({
        data: arr,
      });
    }
  });
});

app.use("/static", Express.static("node_modules"));

app.listen(8888, () => {
  console.log(`app is listening on ${8888}`);
});
