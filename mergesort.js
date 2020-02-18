function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */

  if (wholeArray.length === 1) {
    return wholeArray;
  }

  const half = Math.ceil(wholeArray.length/2);
  const firstHalf = wholeArray.slice(0, half)
  const secondHalf = wholeArray.slice(half);


  return [firstHalf, secondHalf];
}

function merge(firstArr, secondArr) {

  let sortedArray= [];

  for (let i=0; i< secondArr.length; i++) {
    if (firstArr[i] < secondArr[i]){
      sortedArray.push(firstArr[i], secondArr[i])

    } else {
      sortedArray.push(secondArr[i], firstArr[i]);
    }
  }

  return sortedArray;
}


function mergeSort(array) {
  //keeps splitting array until only array size = 1



  //calls merge until all arrays become 1 again

}
