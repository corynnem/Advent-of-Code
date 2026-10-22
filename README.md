# Advent-of-Code

## Getting started

To start a new year, copy & paste the `getting-started` folder, which has the file structure for one day
& the file loader. `cd` into the file loader & run `npm i` to install express for the backend & `npm start` to get it started. From there open the live server on the day's html file & you're good to start on day 1! There's a test endpoint to debug any issues with the server, so if you have any issue just change the endpoint on the fetch.

To load in the extremely large text files for this project I just use a simple express server that pulls the puzzle input from the data.txt file in each day's folder. Make sure to add the puzzle input data to the data.txt file before getting started

The previous years solutions are on here so if you want to see them just follow the steps above in each previous year. I just use plain html & js so I can see the output in a browser (terminals feel so small for this amount of data), so if you open the live server on each html file you can see previous solutions etc etc

# Advent of Code
 
My solutions to [Advent of Code](https://adventofcode.com/), the yearly December puzzle event, from 2021 to 2024. Everything is written in plain JavaScript and runs in the browser. A small Express server feeds each day's puzzle input to the page, so I can read huge outputs in the dev tools console instead of a terminal.
 
## Progress
 
| Year | Days solved | Folder |
| ---- | ----------- | ------ |
| 2021 | 1–3 (plus two warm-up days in `aoc-practice`) | `2021/` |
| 2022 | 1–4 | `2022/solutions/` |
| 2023 | 1–2 | `2023/aoc-solutions/` |
| 2024 | 1–2 | `2024/aoc-solutions/` |
 
Each day has a separate file for each part: `one.js` for part 1 and `two.js` for part 2.
 
## How it works
 
Puzzle inputs are often thousands of lines long, which is too much to paste into a JS file and too much to scroll through in a terminal. So the setup splits the work in two:
 
1. **The file loader** (`fileLoader/server.js`) is a small Express app on port `8888`. Each day gets its own endpoint, such as `/day-one` or `/day-two`. The endpoint reads that day's `data.txt`, does any parsing specific to the puzzle (splitting lines, grouping blank-line-separated blocks, pulling out columns), and returns the result as JSON.
2. **The solution** (`dayN/one.js` / `two.js`) `fetch`es its endpoint, hands the data to a `formatData` function, and logs the answer to the browser console. A matching `index.html` loads whichever part's script is uncommented.
```
browser (index.html → one.js) ──fetch──▶ localhost:8888/day-one ──fs.readFile──▶ dayN/data.txt
```
 
The setup changed over the years. My 2021 solutions paste the input directly into the JS file as an array. In 2022 I moved to the Express loader, and from 2023 on each year has the same layout, which the `getting-started` template copies.
 
## Repository structure
 
```
Advent-of-Code/
├── getting-started/          Template for a new year
│   ├── aoc-solutions/day1/   index.html, one.js, two.js, data.txt
│   └── fileLoader/           Express server that serves each day's input
├── 2021/
│   ├── aoc-practice/         Warm-up puzzles
│   └── aoc-solutions/        Days 1–3, with the inputs pasted into the code
├── 2022/
│   ├── solutions/            Days 1–4
│   └── fileLoader/
├── 2023/
│   ├── aoc-solutions/        Days 1–2
│   └── fileLoader/
└── 2024/
    ├── aoc-solutions/        Days 1–2
    └── fileLoader/
```
 
## Getting started
 
### Requirements
 
- Node.js (any version that supports `fetch` in the browser and Express 4)
- A static file server for the HTML pages. I use the VS Code **Live Server** extension.
### Starting a new year
 
1. Copy the `getting-started` folder and rename it to the year, for example `2025/`.
2. Paste your puzzle input into `aoc-solutions/day1/data.txt`.
3. Start the file loader:
```bash
   cd 2025/fileLoader
   npm install
   npm start        # runs server.js on http://localhost:8888
```
4. In `day1/index.html`, add a script tag for the part you're working on:
```html
   <script src="./one.js"></script>
   <!-- <script src="./two.js"></script> -->
```
5. Open `index.html` with Live Server and check the browser console for output.
### Adding a new day
 
1. Copy `day1` to `dayN` and replace `data.txt` with that day's input.
2. In `fileLoader/server.js`, copy the `/day-***` starter endpoint, rename it (for example `/day-three`), point its `readFile` at the new folder, and add any parsing the puzzle needs.
3. Update the `fetch` URL in `one.js` / `two.js` to the new endpoint.
4. Restart the server.
### Debugging
 
The loader has a test endpoint at `GET /` that returns `{ "message": "success" }`. If a solution logs a fetch error, point its `fetch` at `http://localhost:8888/` to check that the server is running.
 
> **Line endings:** the loader splits input on `\r\n` (Windows line endings). If your `data.txt` uses `\n`, change the split to `data.split(/\r?\n/)`.
 
## Running past solutions
 
Follow the same steps inside any year's folder: start that year's `fileLoader`, then open the day's `index.html` with Live Server. To get the 2021 answers, open the HTML file; those solutions don't need the server.
 
## Built with
 
- JavaScript (ES2017+, `async`/`await`, array methods)
- Node.js and Express
- The browser dev tools console as the output window
