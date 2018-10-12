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
