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
