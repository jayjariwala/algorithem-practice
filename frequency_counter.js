/** Naive Solution that has time complexity of O(n ^ 2) */

function same(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  arr1.forEach(element => {
    if(arr2.indexOf(element) === -1) {
      return false;
    }
    arr2.splice(arr2.indexOf(element ^ 2))
  });
  return true;
}
const result = same([1,2,3,4],[1,4,9,16]);
console.log(result);


/** Solving the same problem with frquency counter pattern O(n) */

/** Loop over two seprate array */

// function same(arr1,arr2) {
//   if(arr1.length !== arr2.length) {
//     return false;
//   }
//   const countObj1 = {};
//   const countObj2 = {};

//   arr1.forEach(element => {
//     if(countObj1[element]) {
//       countObj1[element] = countObj1[element] + 1;
//     } else {
//       countObj1[element] = 1;
//     }
//   });
//   arr2.forEach(element => {
//     if(countObj2[element]) {
//       countObj2[element] = countObj2[element] + 1;
//     } else {
//       countObj2[element] = 1;
//     }
//   });

//   for(key in countObj1) {
//     if(countObj2[key * key] !== countObj1[key]) {
//       return false;
//     }
//   }
//   return true;
// }

const result = same([1,2,3], [1,4,9, 12]);
console.log(result);