// practice closure and recursion

printTriangle = () => {
  let count = 1; // variable stored in closure
  printNum = (num) => {
    if (count <= num) {
      let printHolder = '';
      for(let i = 0; i < count; i++) {
        printHolder += '#';
      }
      console.log(printHolder);
      count ++;
      printNum(num);
    }
  }
  return printNum;
}

const tester = printTriangle();
tester(10);
console.dir(tester);


// ===============================

// write a class that throttles the concurrency and responds
// to the following interface
class Queue {
  constructor(obj) {
    this.concurrency = obj.concurrency;
    this.storage = [];
  }

  add(...jobs) {
    for (let i = 0; i < jobs.length; i++) {
      this.storage[this.storage.length] = jobs[i];
    }
  }

  runJob() {
    if (!this.storage.length) {
      return;
    }
    const job = this.storage.shift();
    job().then(() => { this.runJob() })
  }

  start() {
    for (let i = 0; i < this.concurrency; i++) {
      this.runJob();
    };
  }
}

let queue = new Queue({ concurrency: 10 })

queue.add(...jobs(100));
queue.start();

// ========================

var _ = require('underscore');

/**

Imagine we have an image. We'll represent this image as a simple 2D array where every pixel is a 1 or a 0. The image you get is known to have a single rectangle of 0s on a background of 1s.

Write a function that takes in the image and returns the coordinates of the rectangle of 0's -- either top-left and bottom-right; or top-left, width, and height.

image1 = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1],
]

Sample output variations (only one is necessary):
findRectangle(image1) =>
  x: 3, y: 2, width: 3, height: 2
  2,3 3,5 -- row,column of the top-left and bottom-right corners

*/

var image1 = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1],
];

var image2 = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0],
];

var image3 = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 0],
  [1, 1, 1, 1, 1, 0, 0],
];

var image4 = [
  [0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
];

var image5 = [
  [0],
];

function findPic(nestedArr) {
  const coordinate = {};

  for (let i = 0; i < nestedArr.length; i++) {
    if (coordinate.x) {
      break;
    }

    for (let j = 0; j < nestedArr.length; j++) {

      if (nestedArr[j][i] === 0 && coordinate.x === undefined) {
        coordinate.x = i;
        coordinate.y = j;
        coordinate.width = 1;
        coordinate.height = 1;
      } else if (nestedArr[i][j] === 0) {
        coordinate.width += 1;

      } else if (nestedArr[i][j] === 1 && coordinate.x) {
        break;
      }
    }
  }

  const x = coordinate.x;
  let y = coordinate.y + 1;

  while (y <= nestedArr[y].length && nestedArr[y][x] === 0) {
    coordinate.height += 1;
    y += 1;
  }

  return coordinate;
}

console.log(findPic(image3));

// ===========================

// cons_values = [2, 4, 5, 7, 9] rates of consumption in tonnes per hour
// timestamps =  [0, 2, 3, 6, 9] hours since epoch
// total_cons(cons_values, timestamps, start, end)
// 2 * 2 + 1 * 4 + 3 * 5 + 3 * 7 = 44 tons
total_cons(consValues, timeStamps, 2, 7);
function total_cons(consValues, timeStamps, start, end) {
  let totalConsumption = 0;
  let startIndex = 0;
  let endIndex = 0;
  if (timeStamps[timeStamps.length - 1] < end) {
    timeStamps.push(end);
  }
  for (let i = 0; i < timeStamps.length; i++) {
    if (timeStamps[i] === start) startIndex = i;

    if (timeStamps[i] <== end) endIndex = i;
  }

  for (let j = startIndex; j < endIndex; j++) {
    if (j < endIndex - 1) totalConsumption += consValues[j] * (timeStamps[j + 1] - timeStamps[j]);
    else totalConsumption += consValues[j] * (end - timeStamps[j]);
  }

  return totalConsumption;
}

// ====================
function printN() {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log('Value: ' + i)
    }, 1000);
  }
}

// VS

function printN() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log('Value: ' + i)
    }, 1000);
  }
}

// =====================

/*
Given input of number, return all the possible combination of the (),

Example: 2, ()(), or (())
Example: 3, ()()(), ()(()), (())(), ((()))

*/

const findParen = (n) => {
  const result = [];

  const recurse = (value, accumulator, openCount, closeCount, level) => {

    // stop routes that have more closing parentheses
    if (openCount < closeCount) {
      return;
    }

    // return accumulator on routes that reached to last level
    if (level <= 0) {
      return result.push(accumulator);
    }

    // on routes that already have n opening paren, stop all open paren routes
    if (openCount >= n) {
      return recurse(')', accumulator + ')', openCount, closeCount + 1, level - 1);
    }


    recurse('(', accumulator + '(', openCount + 1, closeCount, level - 1);
    recurse(')', accumulator + ')', openCount, closeCount + 1, level - 1);
  }

  // invoke recursion with initial arguments
  recurse('(', '', 0, 0, n * 2);

  // return accumulated results
  return result;
}

findParen(4);
