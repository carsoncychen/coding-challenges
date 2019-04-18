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
