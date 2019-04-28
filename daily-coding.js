// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

const list = [10, 15, 3, 7];
const k = 11;

function twoSum (list, k) {
  if (list.length <= 1) {
    return false;
  }

  const listSet = new Set(list);

  let count = 0;

  while (count < list.length) {
    const target = k - list[count];
    if (listSet.has(target)) {
      return true;
    };

    count ++;
  }

  return false;

}

twoSum(list, k);

// ===============================

/*
Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/

// using Div

const arr = [1, 2, 3, 4]

class WithDivision {
  constructor(arr) {
    this.arr = arr;
    this.totalProduct = 1;
  }

  findProduct() {
    const result = [];

    this.arr.forEach((el) => {
      this.totalProduct *= el;
    })

    this.arr.forEach((el) => {
      result.push(this.totalProduct / el);
    })

    return result;
  }
}

const withDiv = new WithDivision(arr);
console.log(withDiv.findProduct());

// without Div

const arr = [1, 2, 3]

class NoDivision {
  constructor(arr) {
    this.arr = arr;
    this.prefix = [];
    this.suffix = [];
    this.result = [];
  }

  findPrefix() {
    for (let el of this.arr) {
      if (this.prefix.length) {
        this.prefix.push(this.prefix[this.prefix.length - 1] * el)
      } else {
        this.prefix.push(el)
      }
    }
  }

  findSuffix() {
    for (let i = this.arr.length - 1; i >= 0; i--) {
      if (this.suffix.length) {
        this.suffix.push(this.suffix[this.suffix.length - 1] * this.arr[i])
      } else {
        this.suffix.push(this.arr[i]);
      }
    }
  }

  findProduct() {
    for (let i = 0; i < this.arr.length; i++) {
      if (i === 0) {
        this.result.push(this.suffix[i + 1]);
      } else if (i === this.arr.length - 1) {
        this.result.push(this.prefix[1]);
      } else {
        this.result.push(this.prefix[i - 1] * this.suffix[i - 1]);
      }
    }
  }
}

const noDiv = new NoDivision(arr);
noDiv.findPrefix();
noDiv.findSuffix();
noDiv.findProduct();
console.log(noDiv);

// ================
