//**Multiple Pointers Pattern */

function sumZero(arr) {
  if(!arr.length) return;
  let leftPoint = 0;
  let rightPoint = arr.length - 1;
  while(leftPoint < rightPoint) {
    const sum = arr[leftPoint] + arr[rightPoint];
    if(sum === 0) {
      return [arr[leftPoint], arr[rightPoint]];
    } else if(sum > 0) {
      rightPoint--;
    } else if(sum < 0) {
      leftPoint++;
    }
  }
}

console.log(sumZero([-3,-2,-1,0,1,2,3])) // [-3,3]
console.log(sumZero([-2,0,1,3])) // undefined
console.log(sumZero(1,2,3)) // underfined
