const Express = require("express");
const fs = require("fs");

const app = Express();
const { cors } = require("./middleware");

app.use(Express.json());
app.use(cors);

app.get("/day-one", (_, res) => {
  fs.readFile("../day1/data.txt", "utf8", (err, data) => {
    let arr = data.split("\r\n");

    let index = 0;
    let newArr = [[]];
    arr.forEach((item, i) => {
      if (item === "") {
        index += 1;
        newArr = [...newArr, []];
      } else {
        newArr[index].push(parseInt(item));
      }
    });

    if (err) {
      res.send({
        err,
      });
    } else {
      res.json({
        data: newArr,
      });
    }
  });
});

app.get("/day-two", (req, res) => {
  fs.readFile("../day2/data.txt", "utf8", (err, data) => {
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

app.get("/day-three", (req, res) => {
  fs.readFile("../day3/data.txt", "utf8", (err, data) => {
    let arr = data.split("\r\n");

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

app.get("/day-four", (req, res) => {
  x;
  fs.readFile("../day4/data.txt", "utf8", (err, data) => {
    let arr = data.split("\r\n");
    let newArr = arr.map((assignment, i) => {
      let assignments = assignment.split(",");
      let newAssignments = assignments.map((item) => {
        let itemArr = [];
        let newItem = item.split("-");
        for (let i = parseInt(newItem[0]); i <= parseInt(newItem[1]); i++) {
          itemArr.push(i);
        }
        return itemArr;
      });
      return newAssignments;
    });
    if (err) {
      res.json({
        error: err,
      });
    } else {
      res.json({
        data: newArr,
      });
    }
  });
});

// Starter endpoint
app.get("/day-***", (req, res) => {
  fs.readFile("../day*/data.txt", "utf8", (err, data) => {
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
