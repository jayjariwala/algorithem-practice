function selectionSort(arr) {
  let skip;
  for(let i= 0; i < arr.length; i++) {
    skip = true;
    for(let j= i + 1 ; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
      if(arr[j] < arr[i]) {
        skip = false;
        let temp = null;
        temp = arr[i];
        arr[i] = arr[j]
        arr[j] = temp;
      }
    }
    if(skip) {
      break;
    }
  }
  return arr;
}

selectionSort([1,2,3,4,5]);