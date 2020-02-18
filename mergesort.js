/* eslint-disable no-unused-vars */
function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */

  if (wholeArray.length === 1) {
    return wholeArray;
  }

  const half = Math.ceil(wholeArray.length / 2);
  const firstHalf = wholeArray.slice(0, half);
  const secondHalf = wholeArray.slice(half);

  return [firstHalf, secondHalf];
}

function merge(firstArr, secondArr) {
  let sortedArray = [];
  while (secondArr.length) {
    if (firstArr[0] < secondArr[0]) {
      sortedArray.push(firstArr[0]);
      firstArr.shift();
    } else {
      sortedArray.push(secondArr[0]);
      secondArr.shift();
    }
  }

  if (firstArr.length) {
    sortedArray = [...sortedArray, ...firstArr];
  }
  return sortedArray;
}

function mergeSort(array) {
  // keeps splitting array until only array size = 1
  const splitArray = split(array);
  // will continue to split() until the most-nested-array.length is 1
  let first=splitArray[0];
  let second=splitArray[1];
  console.log('splitarray', splitArray)
  while (splitArray[0].length > 1) {
    first = mergeSort(splitArray[0]);
    second = mergeSort(splitArray[1]);
  }
  console.log('first:', first)
  console.log('second:', second)

  return merge(first, second);

  // calls merge until all arrays become 1 again
}
