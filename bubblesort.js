function bubbleSort(array) {

  let pointer1;
  let pointer2;
  // let placeholder;

  if (array.length === 0){
    return array;
  }

  let j=0;
  let counter = 1;

  while (j<array.length){ //outer loop to make sure all iterations are done

    for (let i=0; i<array.length-1; i++) { //inner loop - sorting
      pointer1 = array[i];
      pointer2 = array[i+1];

      if (pointer2 > pointer1) {
        counter++
        continue;
      } else if (pointer1 > pointer2){
        array[i] = pointer2;
        array[i+1] = pointer1;
      }
    }

    if (counter === array.length) {
      return array;
    }

    j++;
    // console.log("whileLoop counter", j)
  }


  return array;
}
