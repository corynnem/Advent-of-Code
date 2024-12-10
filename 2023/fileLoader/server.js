const Express = require("express");
const fs = require("fs");

const app = Express();
const { cors } = require("./middleware");

app.use(Express.json());
app.use(cors);

app.get("/day-one", (_, res) => {
  fs.readFile("../aoc-solutions/day1/data.txt", "utf8", (err, data) => {
    console.log(data);
    let arr = data.split("\r\n");

    if (err) {
      res.send({
        err,
      });
    } else {
      res.json({
        data: arr,
        data1: data,
      });
    }
  });
});

// Starter endpoint
app.get("/day-two", (req, res) => {
  fs.readFile("../aoc-solutions/day2/data.txt", "utf8", (err, data) => {
    let arr = data.split("\r\n");
    console.log(arr);
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

app.listen(3000, () => {
  console.log(`app is listening on ${3000}`);
});
