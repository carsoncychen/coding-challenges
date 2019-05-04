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

// ================
/*You are in charge of a display advertising program. Your ads are displayed on websites all over the internet. You have some CSV input data that counts how many times that users have clicked on an ad on each individual domain. Every line consists of a click count and a domain name, like this:*/

let counts = ["900,google.com",
  "60,mail.yahoo.com",
  "10,mobile.sports.yahoo.com",
  "40,sports.yahoo.com",
  "300,yahoo.com",
  "10,stackoverflow.com",
  "2,en.wikipedia.org",
  "1,es.wikipedia.org",
  "1,mobile.sports",
  "1,google.co.uk"];

/*
['900', 'google.com']
['900', ['google', 'com']]
['410', ['yahoo', 'com']]

{
  'com': 1310,
  'google.com': 900
  yahoo.com: 410
}

*/
/*
Write a function that takes this input as a parameter and returns a data structure containing the number of clicks that were recorded on each domain AND each subdomain under it. For example, a click on "mail.yahoo.com" counts toward the totals for "mail.yahoo.com", "yahoo.com", and "com". (Subdomains are added to the left of their parent domain. So "mail" and "mail.yahoo" are not valid domains. Note that "mobile.sports" appears as a separate domain as the last item of the input.)

Sample output (in any order/format):

calculateClicksByDomain(counts)
1320    com
 900    google.com
 410    yahoo.com
  60    mail.yahoo.com
  10    mobile.sports.yahoo.com
  50    sports.yahoo.com
  10    stackoverflow.com
   3    org
   3    wikipedia.org
   2    en.wikipedia.org
   1    es.wikipedia.org
   1    mobile.sports
   1    sports
   1    uk
   1    co.uk
   1    google.co.uk
*/

function calculateClicksByDomain(counts) {
  const result = {};

  const splittedArr = [];

  for (let el of counts) {
    let newEl = el.split(',')
    newEl[1] = newEl[1].split('.');
    splittedArr.push(newEl)
  }

  for (let innerArr of splittedArr) {
    const curEl = [];
    for (let i = innerArr[1].length - 1; i >= 0; i--) {
      curEl.unshift(innerArr[1][i]);
      const newCurEl = curEl.join('.')
      if (result[newCurEl]) {
        result[newCurEl] += parseInt(innerArr[0]);
      } else {
        result[newCurEl] = parseInt(innerArr[0]);
      }
    }
  }

  return result

}
console.log(
  calculateClicksByDomain(counts));

// ===================

/*
We have some clickstream data that we gathered on our client's website. Using cookies, we collected snippets of users' anonymized URL histories while they browsed the site. The histories are in chronological order and no URL was visited more than once per person.

Write a function that takes two users' browsing histories as input and returns the longest contiguous sequence of URLs that appears in both.*/


var user0 = ["/start.html", "/pink.php", "/register.asp", "/orange.html", "/red.html"];
var user1 = ["/start.html", "/green.html", "/blue.html", "/pink.php", "/register.asp", "/orange.html"];
var user2 = ["/red.html", "/green.html", "/blue.html", "/pink.php", "/register.asp"];
var user3 = ["/blue.html", "/logout.php"];


/*
Sample output:

findContiguousHistory(user0, user1)
   /pink.php
   /register.asp
   /orange.html

findContiguousHistory(user1, user2)
   /green.html
   /blue.html
   /pink.php
   /register.asp

findContiguousHistory(user0, user3)
   (empty)

findContiguousHistory(user2, user3)
   /blue.html

findContiguousHistory(user3, user3)
   /blue.html
   /logout.php
*/

function helper(arr1, arr2, pointer1Start, pointer2Start) {
  let endPoint1 = pointer1Start;
  let endPoint2 = pointer2Start;

  while ()
}

function findContiguousHistory(arr1, arr2) {
  let longestHistory = 0;
  let pointer1Start;
  let pointer2Start;
  let pointer1End;
  let pointer2End;

  for (let i = 0; i < arr1.length; i++) {

    const curEl = arr1[i];

    const arr2Spot = arr2.indexOf(curEl);
    if (arr2Spot) {
      pointer1Start = i;
      pointer2Start = arr2Spot;
      helper(arr1, arr2, pointer1Start, pointer2Start)
    }
  }

}

// =======================

// Recreate Document object from browser.

class MyDocument {
  constructor(tagName) {
    this.tagName = tagName || 'html',
      this.innerHTML = '',
      this.children = []
  }

  createElement(tagName) {
    return new MyDocument(tagName);
  }

  appendChild(element) {
    this.children.push(element);
  }

  render() {
    let openTags = '';
    let closingTags = '';

    function recursiveRendering(curDOM) {
      let innerHTML = curDOM.innerHTML === '' ? '' : `${curDOM.innerHTML}\n`

      openTags = openTags + `<${curDOM.tagName}>\n${innerHTML}`;
      closingTags = `</${curDOM.tagName}>\n` + closingTags;
      if (curDOM.children) {
        curDOM.children.forEach((childDOM) => {
          recursiveRendering(childDOM);
        })
      }
    }
    recursiveRendering(this);

    return openTags + closingTags;
  }

}

const myDoc = new MyDocument();
const body = myDoc.createElement('body');
const div = myDoc.createElement('div');
div.innerHTML = 'Inside of a div!';
myDoc.appendChild(body);
body.appendChild(div);

console.log(myDoc.render())


// ===============
