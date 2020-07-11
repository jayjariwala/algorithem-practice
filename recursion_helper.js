function findOddsArray(arr) {
  const array = [];
  function helperFunction(arr) {
    if(arr.length === 0) return;

    if(arr[0] % 2 !== 0) {
      array.push(arr[0]);
    }

    helperFunction(arr.slice(1));
  }
  helperFunction(arr);

  return array;
}

console.log(findOddsArray([1,2,3,4,5,6,7,8,9,10]));