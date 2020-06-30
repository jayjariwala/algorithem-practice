function maxSubArraySum(arr, num) {
  let tempSum = 0;
  let maxSum = 0;
  if(num > arr.length) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let j = num; j < arr.length; j++) {
    tempSum = tempSum - arr[j - num] + arr[j];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubArraySum([1,2,5,2,8,1,5], 2)); // 10
console.log(maxSubArraySum([1,2,5,2,8,1,5], 4)); // 17
console.log(maxSubArraySum([4,2,1,6], 1)); // 6
console.log(maxSubArraySum([4,2,1,6,2], 4)); // 13
console.log(maxSubArraySum([], 4)); // null
